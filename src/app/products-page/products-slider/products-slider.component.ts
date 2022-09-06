import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/_models/product.model';

@Component({
  selector: 'app-products-slider',
  templateUrl: './products-slider.component.html',
  styleUrls: ['./products-slider.component.css']
})
export class ProductsSliderComponent implements OnInit {

  constructor() { }

  @Input() title:string = 'How about these?';
  responsiveOptions = [
    {
        breakpoint: '1440px',
        numVisible: 7,
        numScroll: 5
    },
    {
        breakpoint: '1252px',
        numVisible: 6,
        numScroll: 4
    },
    {
        breakpoint: '1064px',
        numVisible: 5,
        numScroll: 3
    },
    {
        breakpoint: '876px',
        numVisible: 4,
        numScroll: 2
    },
    {
        breakpoint: '688px',
        numVisible: 3,
        numScroll: 2
    },
    {
        breakpoint: '500px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '312px',
        numVisible: 1,
        numScroll: 2
    },
  ]

  products: IProduct[] = [
    {
      images: ['assets/bags/bag-1/1.avif','assets/bags/bag-1/2.avif','assets/bags/bag-1/3.avif'],
      price: 125,
      title: 'Force red best seller bag',
      discount: 0,
      rate: 4.7,
      raters: 2,
      type: 'express'
    },
    {
      images: ['assets/bags/bag-2/1.avif'],
      price: 125,
      title: 'Force red best seller bag',
      discount: 12,
      rate: 4.1,
      raters: 12,
      type: 'express'
    },
    {
      images: ['assets/bags/bag-3/1.avif','assets/bags/bag-3/2.avif','assets/bags/bag-3/3.avif','assets/bags/bag-3/4.avif'],
      price: 300,
      title: 'Logo Printed Backpack Burgundy/White',
      discount: 20,
      type: 'express'
    },
    {
      images: ['assets/bags/bag-4/1.avif','assets/bags/bag-4/2.avif','assets/bags/bag-4/3.avif'],
      price: 600,
      title: 'FORCE Bag for 15.6" Laptop - Size 45 x 29 x 13 cm',
      discount: 32,
      rate: 3.2,
      raters: 52,
    },
    {
      images: ['assets/bags/bag-5/1.avif','assets/bags/bag-5/2.avif','assets/bags/bag-5/3.avif'],
      price: 2200,
      title: 'Settlement Backpack Black Comfortable Laptop - Size 45 x 29 x 13 cm',
      discount: 41,
      rate: 4.8,
      raters: 5212,
    },
    {
      images: ['assets/bags/bag-1/1.avif','assets/bags/bag-1/2.avif','assets/bags/bag-1/3.avif'],
      price: 125,
      title: 'Force red best seller bag',
      discount: 0,
      rate: 4.7,
      raters: 2,
      type: 'express'
    },
    {
      images: ['assets/bags/bag-2/1.avif'],
      price: 125,
      title: 'Force red best seller bag',
      discount: 12,
      rate: 4.1,
      raters: 12,
      type: 'express'
    },
    {
      images: ['assets/bags/bag-3/1.avif','assets/bags/bag-3/2.avif','assets/bags/bag-3/3.avif','assets/bags/bag-3/4.avif'],
      price: 300,
      title: 'Logo Printed Backpack Burgundy/White',
      discount: 20,
      type: 'express'
    },
    {
      images: ['assets/bags/bag-4/1.avif','assets/bags/bag-4/2.avif','assets/bags/bag-4/3.avif'],
      price: 600,
      title: 'FORCE Bag for 15.6" Laptop - Size 45 x 29 x 13 cm',
      discount: 32,
      rate: 3.2,
      raters: 52,
    },
    {
      images: ['assets/bags/bag-5/1.avif','assets/bags/bag-5/2.avif','assets/bags/bag-5/3.avif'],
      price: 2200,
      title: 'Settlement Backpack Black Comfortable Laptop - Size 45 x 29 x 13 cm',
      discount: 41,
      rate: 4.8,
      raters: 5212,
    },
    {
      images: ['assets/bags/bag-1/1.avif','assets/bags/bag-1/2.avif','assets/bags/bag-1/3.avif'],
      price: 125,
      title: 'Force red best seller bag',
      discount: 0,
      rate: 4.7,
      raters: 2,
      type: 'express'
    },
    {
      images: ['assets/bags/bag-2/1.avif'],
      price: 125,
      title: 'Force red best seller bag',
      discount: 12,
      rate: 4.1,
      raters: 12,
      type: 'express'
    },
    {
      images: ['assets/bags/bag-3/1.avif','assets/bags/bag-3/2.avif','assets/bags/bag-3/3.avif','assets/bags/bag-3/4.avif'],
      price: 300,
      title: 'Logo Printed Backpack Burgundy/White',
      discount: 20,
      type: 'express'
    },
    {
      images: ['assets/bags/bag-4/1.avif','assets/bags/bag-4/2.avif','assets/bags/bag-4/3.avif'],
      price: 600,
      title: 'FORCE Bag for 15.6" Laptop - Size 45 x 29 x 13 cm',
      discount: 32,
      rate: 3.2,
      raters: 52,
    },
    {
      images: ['assets/bags/bag-5/1.avif','assets/bags/bag-5/2.avif','assets/bags/bag-5/3.avif'],
      price: 2200,
      title: 'Settlement Backpack Black Comfortable Laptop - Size 45 x 29 x 13 cm',
      discount: 41,
      rate: 4.8,
      raters: 5212,
    },
  ]

  ngOnInit(): void {
  }

}
