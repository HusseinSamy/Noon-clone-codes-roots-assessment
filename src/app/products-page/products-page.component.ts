import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];
  constructor() { }
  cars = [{
    name: 'koko',
    image: 'assets/sales/1.JPG'
  },{
    name: 'koko',
    image: 'assets/sales/1.JPG'
  },{
    name: 'koko',
    image: 'assets/sales/1.JPG'
  },{
    name: 'koko',
    image: 'assets/sales/1.JPG'
  },{
    name: 'koko',
    image: 'assets/sales/1.JPG'
  },]
  ngOnInit(): void {
  }

}
