import { Component, OnInit } from '@angular/core';
import { SwiperService } from 'src/_services/swiper.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    constructor(private swiper: SwiperService) {}
    config = this.swiper.config3;
    headerCategories = ["بيع في نون","سوبر ماركت","الأطفال و الألعاب","الجمال و العطور","المنزل","نسائية","رجالية","موبايلات","الإلكترونيات","عروض",]

    ngOnInit(): void {}
}
