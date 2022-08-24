import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/_services/data.service';
import { SwiperService } from 'src/_services/swiper.service';
import { CategoriesModel } from 'src/_models/categories.model';

@Component({
    selector: 'app-categories-carousel',
    templateUrl: './categories-carousel.component.html',
    styleUrls: ['./categories-carousel.component.css'],
})
export class CategoriesCarouselComponent implements OnInit {
    constructor(private swiper: SwiperService, private http: DataService) {
        for (let i = 1; i < 13; i++) {
            this.firstFileList.push(`assets/categories carousel/${i}.avif`);
        }
        for (let i = 11; i < 23; i++) {
            this.secondFileList.push(`assets/categories carousel/${i}.avif`);
        }
    }
    config = this.swiper.config2;
    firstFileList: string[] = [];
    secondFileList: string[] = [];

    categoriesEndpoint: string = '/Categories/index';
    categories: CategoriesModel[] = [];
    categoriesImagesUrls: string[] = [];
    categoriesImages: Buffer[] = [];

    async getCategories() {
        this.http
            .GetEndpoints(this.http.baseUrl + this.categoriesEndpoint)
            .subscribe({
                next: (data) => {
                    this.categories = data as CategoriesModel[];
                    console.log(
                        'i am going to send request to /Categories/index'
                    );
                    console.log(this.categories);
                    this.storeCategoriesImagesUrls();
                    console.log(
                        'i am goiong to send request to uploads/cities/img-1660068637354-757679170.png'
                    );
                    this.storeImages();
                    console.log(this.categoriesImages);
                    console.log('saved images');

                    return data as Object[];
                },
                error: (err) => {
                    console.log(
                        'i am stuck in the error section of the first request'
                    );
                    return err;
                },
            });
    }

    storeCategoriesImagesUrls() {
        this.categories.forEach((el) => {
            this.categoriesImagesUrls.push(el.photo);
        });
        console.log(this.categoriesImagesUrls);
    }

    storeImages() {
        this.categoriesImagesUrls.forEach((el) => {
            this.http
                .GetEndpoints(this.http.subRequestUrl + `/${el}`)
                .subscribe({
                    next: (data) => {
                        console.log(
                            'i have sent request to uploads/cities/img-1660068637354-757679170.png'
                        );
                        this.categoriesImages.push(data as Buffer);
                        console.log(this.categoriesImages);
                        return data as Buffer;
                    },
                    error: (err) => {
                        console.log(
                            'i am stuck in the error section of the second request'
                        );
                        console.log(err);

                        return err;
                    },
                });
        });
    }

    ngOnInit(): void {
        this.getCategories();
        console.log(this.categoriesImages);
    }
}
