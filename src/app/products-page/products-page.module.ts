import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

import { ImgMagnifier } from "ng-img-magnifier";
import { ProductsPageComponent } from './products-page.component';



@NgModule({
  declarations: [ProductsPageComponent],
  imports: [
    CommonModule,
    ImgMagnifier,
    CarouselModule
  ],
  exports: [ProductsPageComponent]
})
export class ProductsPageModule { }
