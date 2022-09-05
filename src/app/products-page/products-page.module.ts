import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

import { ImgMagnifier } from "ng-img-magnifier";
import { ProductsPageComponent } from './products-page.component';
import { SpecificationsComponent } from './specifications/specifications.component';
import { ProductDetailsComponent } from './product-details/product-details.component';



@NgModule({
  declarations: [
    ProductsPageComponent,
    SpecificationsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ImgMagnifier,
    CarouselModule
  ],
  exports: [ProductsPageComponent]
})
export class ProductsPageModule { }
