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
        navigation: true,
        scrollbar: { draggable: true },
        loopFillGroupWithBlank: false,
        pagination: {
            clickable: true,
        },
        breakpoints: {
            350: {
                slidesPerView: 2,
                spaceBetween: 2,
                slidesPerGroup: 2,
            },
            460: {
                slidesPerView: 3,
                spaceBetween: 5,
                slidesPerGroup: 3,
            },
            640: {
                slidesPerView: 4,
                spaceBetween: 7,
                slidesPerGroup: 4,
            },
            790: {
                slidesPerView: 5,
                spaceBetween: 10,
                slidesPerGroup: 5,
            },
            1120: {
                slidesPerView: 7,
                spaceBetween: 10,
                slidesPerGroup: 7,
            },
            1440: {
                slidesPerView: 8,
                spaceBetween: 10,
                slidesPerGroup: 8,
            },
        },
    };

    config3: SwiperOptions = {
        navigation: true,
        scrollbar: { draggable: true },
        setWrapperSize: false,
        breakpoints: {
            350: {
                slidesPerView: 2,
                spaceBetween: 0,
                slidesPerGroup: 2,
            },
            460: {
                slidesPerView: 3,
                spaceBetween: 0,
                slidesPerGroup: 2,
            },
            640: {
                slidesPerView: 4,
                spaceBetween: 0,
                slidesPerGroup: 2,
            },
            790: {
                slidesPerView: 5,
                spaceBetween: 0,
                slidesPerGroup: 2,
            },
            1440: {
                slidesPerView: 10,
                spaceBetween: 0,
                slidesPerGroup: 2,
            },
        },
    };
    config4: SwiperOptions = {
        navigation: true,
        scrollbar: { draggable: true },
        breakpoints: {
            350: {
                slidesPerView: 2,
                spaceBetween: 0,
                slidesPerGroup: 2,
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 0,
                slidesPerGroup: 2,
            },
            790: {
                slidesPerView: 4,
                spaceBetween: 0,
                slidesPerGroup: 2,
            },
            1000: {
                slidesPerView: 5,
                spaceBetween: 0,
                slidesPerGroup: 2,
            },
            1210: {
                slidesPerView: 6,
                spaceBetween: 0,
                slidesPerGroup: 2,
            },
            1440: {
                slidesPerView: 7,
                spaceBetween: 0,
                slidesPerGroup: 2,
            },
        },
    };
}
