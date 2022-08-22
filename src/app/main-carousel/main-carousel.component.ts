import { Component, OnInit } from '@angular/core';
import { SwiperService } from 'src/_services/swiper.service';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.css']
})
export class MainCarouselComponent implements OnInit {

  constructor(private swiper: SwiperService){}
  config = this.swiper.config;
  
  ngOnInit(): void {
  }

}
