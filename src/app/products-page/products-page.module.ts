import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ProductsRoutingModule } from './products-page-routing.module';

import { ImgMagnifier } from "ng-img-magnifier";
import { ProductsPageComponent } from './products-page.component';
import { SpecificationsComponent } from './specifications/specifications.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsSliderComponent } from './products-slider/products-slider.component';

import { ShortenPipe } from 'src/_shared/pipes/shorten.pipe';


@NgModule({
  declarations: [
    ProductsPageComponent,
    SpecificationsComponent,
    ProductDetailsComponent,
    ProductsSliderComponent,
    ShortenPipe
  ],
  imports: [
    CommonModule,
    ImgMagnifier,
    CarouselModule,
    ProductsRoutingModule
  ],
  exports: [ProductsPageComponent, ShortenPipe]
})
export class ProductsPageModule { }
