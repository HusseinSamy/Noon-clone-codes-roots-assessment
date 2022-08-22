import { Component, OnInit } from '@angular/core';
import { SwiperService } from 'src/_services/swiper.service';

@Component({
    selector: 'app-categories-carousel',
    templateUrl: './categories-carousel.component.html',
    styleUrls: ['./categories-carousel.component.css'],
})
export class CategoriesCarouselComponent implements OnInit {
    constructor(private swiper: SwiperService) {
      for (let i = 1; i < 13; i++){
        this.firstFileList.push(`assets/categories carousel/${i}.avif`);
      }
      for (let i = 11; i < 23; i++){
        this.secondFileList.push(`assets/categories carousel/${i}.avif`);
      }
    }
    config = this.swiper.config2;
    firstFileList: string[] = [];
    secondFileList: string[] = [];
    
    ngOnInit(): void {
      
    }
}
