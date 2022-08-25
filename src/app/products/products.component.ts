import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/_services/data.service';
import { SwiperService } from 'src/_services/swiper.service';
import { Products, RestaurantsElement } from 'src/_models/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private swiper: SwiperService, public http: DataService) {

   }
  config = this.swiper.config4;
  productsEndpoint:string = '/MobileMainPage/GetHomePage';

  freeDliveryBranchesNames: string[] = [];
  freeDliveryBranchesImages: string[] = [];
  freeDliveryBranchesCusines: string[] = [];

  mostOrderedBranches: string[] = [];
  mostOrderedBranchesCuisines: string[] = [];
  mostOrderedBranchesNames: string[] = [];
  mostOrderedBranchesLogos: string[] = [];
  mostOrderedBranchesCovers: string[] = [];
  response: Products ;

  async GetFreeDliveryBranches() {
    this.http.PostEndpoints(this.http.baseUrl + this.productsEndpoint).subscribe({
      next: (data) => {
        const title = (data as Products).GetFreeDliveryBranches.title;
        const branches = (data as Products).GetFreeDliveryBranches.data;
        branches.forEach(element => {
          const logo = element.logo = `${this.http.subRequestUrl}/${element.logo}`;
          element.cuisines.forEach(el => {
            this.freeDliveryBranchesNames.push(element.name);
            this.freeDliveryBranchesImages.push(logo);
            this.freeDliveryBranchesCusines.push(el.name);
          })
        })
        this.response = data as Products;
        this.getMostOrderedBranch();
        },
      error: (err) => {
        console.log(err)
      }
    })
  }
  getMostOrderedBranch() {
    this.response.getMostOrderedBranch.data.forEach(el => {
      this.mostOrderedBranches.push(el.name);
      this.mostOrderedBranchesCovers.push(`${this.http.subRequestUrl}/${el.cover}`);
      el.branches.restaurant.cuisines.forEach(element => {
        this.mostOrderedBranchesCuisines.push(element.name);
        this.mostOrderedBranchesNames.push(el.branches.name);
        this.mostOrderedBranchesLogos.push(`${this.http.subRequestUrl}/${el.branches.restaurant.logo}`);

      })

    });
    console.log(this.mostOrderedBranches);
    console.log(this.mostOrderedBranchesCovers);
    console.log(this.response);
  }
  ngOnInit(): void {
    this.GetFreeDliveryBranches();
  }
}
