import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './home-page/home-page.module';
import { ProductsPageComponent } from './products-page/products-page.component';
import {CarouselModule} from 'primeng/carousel';

@NgModule({
    declarations: [
      AppComponent,
      ProductsPageComponent
    ],
    imports: [
      HomePageModule,
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      CarouselModule
      ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
