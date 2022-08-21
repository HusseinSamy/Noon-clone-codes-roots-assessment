import { Component, OnInit } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Autoplay, Navigation, Pagination, Swiper, SwiperOptions } from 'swiper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noon-clone-codes-roots-assessment';

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
      reverseDirection: true
    },
  };
  config2: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: true,
    scrollbar: { draggable: true },
    autoplay: false,
  };
  ngOnInit(): void {
    Swiper.use([Autoplay, Pagination, Navigation]);
    }
}
