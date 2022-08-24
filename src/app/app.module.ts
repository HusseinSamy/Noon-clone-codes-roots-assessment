import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { CategoriesCarouselComponent } from './categories-carousel/categories-carousel.component';
import { SalesComponent } from './sales/sales.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        MainCarouselComponent,
        CategoriesCarouselComponent,
        SalesComponent,
        HeaderComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, SwiperModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
