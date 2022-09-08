import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './home-page/home-page.module';
import { ProductsPageModule } from './products-page/products-page.module';

@NgModule({
    declarations: [
      AppComponent,
    ],
    imports: [
      HomePageModule,
      BrowserModule,
      HttpClientModule,
      ProductsPageModule,
      AppRoutingModule
      ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
