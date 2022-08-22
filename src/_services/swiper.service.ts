import { Injectable } from '@angular/core';
import {
    Autoplay,
    Navigation,
    Pagination,
    Swiper,
    SwiperOptions,
} from 'swiper';

@Injectable({
    providedIn: 'root',
})
export class SwiperService {
    constructor() {
        Swiper.use([Autoplay, Pagination, Navigation]);
    }

    config: SwiperOptions = {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: true,
        pagination: { clickable: true },
        scrollbar: { draggable: true },
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
            reverseDirection: true,
        },
    };
    config2: SwiperOptions = {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: true,
        scrollbar: { draggable: true },
        autoplay: false,
    };
    ngOnInit(): void {}
}
