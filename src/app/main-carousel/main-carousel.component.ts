import { Component, OnInit } from '@angular/core';
import { SwiperService } from 'src/_services/swiper.service';

@Component({
    selector: 'app-main-carousel',
    templateUrl: './main-carousel.component.html',
    styleUrls: ['./main-carousel.component.css'],
})
export class MainCarouselComponent implements OnInit {
    constructor(private swiper: SwiperService) {
        for (let i = 2; i < 9; i++) {
            this.fileList.push(`assets/main carousel/${i}.jpeg`);
        }
    }
    fileList: string[] = [];
    config = this.swiper.config;

    ngOnInit(): void {}
}
