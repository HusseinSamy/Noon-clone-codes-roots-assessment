import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/_shared/modules/shared.module';

import { NgModule } from "@angular/core";
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { CategoriesCarouselComponent } from './categories-carousel/categories-carousel.component';
import { SalesComponent } from './sales/sales.component';
import { ProductsComponent } from './products/products.component';
import { HomePageComponent } from './home-page.component';

@NgModule({
  declarations: [
    MainCarouselComponent,
    CategoriesCarouselComponent,
    SalesComponent,
    ProductsComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [HomePageComponent,]
})
export class HomePageModule {

}
