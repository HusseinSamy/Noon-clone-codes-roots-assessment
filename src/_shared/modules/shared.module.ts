import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

import { HeaderComponent } from 'src/_shared/components/header/header.component';
import { NavBarDropdownComponent } from 'src/_shared/components/nav-bar-dropdown/nav-bar-dropdown.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavBarDropdownComponent
  ],
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports:[
    HeaderComponent,
    NavBarDropdownComponent,
    SwiperModule
  ]
})
export class SharedModule { }
