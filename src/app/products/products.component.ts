import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/_services/data.service';
import { SwiperService } from 'src/_services/swiper.service';
import { Products} from 'src/_models/products.model';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
    constructor(private swiper: SwiperService, public http: DataService) {}
    config = this.swiper.config4;
    productsEndpoint: string = '/MobileMainPage/GetHomePage';

    response: Products;

    GetData() {
        return this.http.PostEndpoints(
            this.http.baseUrl + this.productsEndpoint
        );
    }

    freeDliveryBranchesNames: string[] = [];
    freeDliveryBranchesImages: string[] = [];
    freeDliveryBranchesCusines: string[] = [];

    GetFreeDliveryBranches() {
        const branches = this.response.GetFreeDliveryBranches.data;
        branches.forEach((element) => {
            const logo =
                (element.logo = `${this.http.subRequestUrl}/${element.logo}`);
            element.cuisines.forEach((el) => {
                this.freeDliveryBranchesNames.push(element.name);
                this.freeDliveryBranchesImages.push(logo);
                this.freeDliveryBranchesCusines.push(el.name);
            });
        });
    }

    mostOrderedBranchesCuisines: string[] = [];
    mostOrderedBranchesNames: string[] = [];
    mostOrderedBranchesLogos: string[] = [];

    getMostOrderedBranch() {
        this.response.getMostOrderedBranch.data.forEach((el) => {
            el.branches.restaurant.cuisines.forEach((element) => {
                this.mostOrderedBranchesCuisines.push(element.name);
                this.mostOrderedBranchesNames.push(el.branches.name);
                this.mostOrderedBranchesLogos.push(
                    `${this.http.subRequestUrl}/${el.branches.restaurant.logo}`
                );
            });
        });
        console.log(this.response);
    }

    mostSellItemsPhotos: string[] = [];
    mostSellItemsNames: string[] = [];
    mostSellItemsDescriptions: string[] = [];
    mostSellItemsPrices: number[] = [];

    getMostSellItems() {
        this.response.MostSellItems.data.forEach((el) => {
            this.mostSellItemsPhotos.push(
                `${this.http.subRequestUrl}/${el.menu_categories_items.photo}`
            );
            this.mostSellItemsNames.push(el.menu_categories_items.name);
            this.mostSellItemsDescriptions.push(
                el.menu_categories_items.descriptions
            );
            this.mostSellItemsPrices.push(el.menu_categories_items.price);
        });
    }

    percentageForVendorsPhotos: string[] = [];
    percentageForVendorsNames: string[] = [];
    percentageForVendorsCuisines: string[] = [];

    getPercentageForVendors() {
        this.response.GetPercentageForVendors.data.forEach((el) => {
            el.restaurants.cuisines.forEach((element) => {
                this.percentageForVendorsPhotos.push(
                    `${this.http.subRequestUrl}/${el.restaurants.logo}`
                );
                this.percentageForVendorsNames.push(element.name);
                this.percentageForVendorsCuisines.push(el.restaurants.name);
            });
        });
    }

    nearestBranchePhotos: string[] = [];
    nearestBrancheNames: string[] = [];
    nearestBrancheCuisines: string[] = [];
    nearestBrancheDeliveryTime: number[] = [];

    getNearestBranche() {
        this.response.GetNearestBranche.data.forEach((el) => {
            el.cuisines.forEach((element) => {
                this.nearestBranchePhotos.push(
                    `${this.http.subRequestUrl}/${el.logo}`
                );
                this.nearestBrancheNames.push(element.name);
                this.nearestBrancheCuisines.push(el.name);
                this.nearestBrancheDeliveryTime.push(el.delivery_time);
            });
        });
    }

    ngOnInit(): void {
        this.GetData().subscribe({
            next: (data) => {
                this.response = data as Products;
                this.GetFreeDliveryBranches();
                this.getMostOrderedBranch();
                this.getMostSellItems();
                this.getPercentageForVendors();
                this.getNearestBranche();
            },
            error: (err) => {
                console.log(err);
            },
        });
    }
}
