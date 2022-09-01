import { SwiperModule } from 'swiper/angular';
import { CommonModule } from '@angular/common';

import { NgModule } from "@angular/core";
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { CategoriesCarouselComponent } from './categories-carousel/categories-carousel.component';
import { SalesComponent } from './sales/sales.component';
import { HeaderComponent } from '../header/header.component';
import { ProductsComponent } from './products/products.component';
import { NavBarDropdownComponent } from '../nav-bar-dropdown/nav-bar-dropdown.component';
import { HomePageComponent } from './home-page.component';


@NgModule({
  declarations: [
    MainCarouselComponent,
    HeaderComponent,
    CategoriesCarouselComponent,
    SalesComponent,
    ProductsComponent,
    NavBarDropdownComponent,
    HomePageComponent
  ],
  imports: [SwiperModule,CommonModule],
  exports: [HomePageComponent, HeaderComponent, NavBarDropdownComponent]
})
export class HomePageModule {

}
