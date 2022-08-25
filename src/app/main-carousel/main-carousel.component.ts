import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/_services/data.service';
import { SwiperService } from 'src/_services/swiper.service';
import { MainSlider } from 'src/_models/main-slider.model';
import { Slider } from 'src/_models/slider.model';
@Component({
    selector: 'app-main-carousel',
    templateUrl: './main-carousel.component.html',
    styleUrls: ['./main-carousel.component.css'],
})
export class MainCarouselComponent implements OnInit {
    constructor(private swiper: SwiperService, private data: DataService) {
        for (let i = 2; i < 9; i++) {
            this.fileList.push(`assets/main carousel/${i}.jpeg`);
        }
    }
    fileList: string[] = [];
    config = this.swiper.config;

    mainSliderUrls:string[] = [];
    mainSliderEndpoint:string = '/MobileMainPage/GetMainSliders';

    ngOnInit(): void {
      this.data.PostEndpoints(this.data.baseUrl + this.mainSliderEndpoint).subscribe({
        next: (dataRes) => {
          const main = (dataRes as MainSlider[]).filter(el => {
            return el.AdsSpacesprice.length > 0;
          });
          const ads = [];
          for (let slider of main) {
            ads.push(slider.AdsSpacesprice);
          }
          const slides:Slider[] = [];
          ads.forEach(el => {
            el.forEach(item => {
              slides.push(item.sliders)
            })
          });
          slides.forEach((el) => {
            this.mainSliderUrls.push(this.data.subRequestUrl + `/${el.photo}`);
          })
        }
      })
    }
}
