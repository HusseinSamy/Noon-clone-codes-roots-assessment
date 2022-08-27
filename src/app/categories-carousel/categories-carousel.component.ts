import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/_services/data.service';
import { SwiperService } from 'src/_services/swiper.service';
import { Categories } from 'src/_models/categories.model';

@Component({
    selector: 'app-categories-carousel',
    templateUrl: './categories-carousel.component.html',
    styleUrls: ['./categories-carousel.component.css'],
})
export class CategoriesCarouselComponent implements OnInit {
    constructor(private swiper: SwiperService, private http: DataService) {}

    config = this.swiper.config2;

    categoriesEndpoint: string = '/Categories/index';
    categories: Categories[] = [];
    categoriesImagesUrls: string[] = [];
    categoriesHeader: string[] = [];
    categoriesPercentage: number[] = [];

    getCategories() {
        this.http
            .GetEndpoints(this.http.baseUrl + this.categoriesEndpoint)
            .subscribe({
                next: (data) => {
                    this.categories = data as Categories[];
                    this.storeCategoriesData();
                },
                error: (err) => {
                    console.log(err);
                },
            });
    }

    storeCategoriesData() {
        this.categories.forEach((el) => {
            this.categoriesImagesUrls.push(
                this.http.subRequestUrl + `/${el.photo}`
            );
            this.categoriesHeader.push(el.name);
            this.categoriesPercentage.push(el.percentage);
        });
    }

    ngOnInit(): void {
        this.getCategories();
    }
}
