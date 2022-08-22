import { Component, OnInit } from '@angular/core';
import { SwiperService } from 'src/_services/swiper.service';

@Component({
    selector: 'app-categories-carousel',
    templateUrl: './categories-carousel.component.html',
    styleUrls: ['./categories-carousel.component.css'],
})
export class CategoriesCarouselComponent implements OnInit {
    constructor(private swiper: SwiperService) {}
    config = this.swiper.config2;
    ngOnInit(): void {}
}
