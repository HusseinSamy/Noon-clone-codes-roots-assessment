import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SwiperService } from 'src/_services/swiper.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    constructor(private swiper: SwiperService) {}
    config = this.swiper.config3;
    headerCategories = [
        'بيع في نون',
        'سوبر ماركت',
        'الأطفال و الألعاب',
        'الجمال و العطور',
        'المنزل',
        'نسائية',
        'رجالية',
        'موبايلات',
        'الإلكترونيات',
    ];
    showNavBar: boolean = false;
    @Output()
    show: EventEmitter<boolean> = new EventEmitter<boolean>();

    toggleNavBar() {
        this.showNavBar = !this.showNavBar;
        this.show.emit(this.showNavBar);
    }
    ngOnInit(): void {}
}
