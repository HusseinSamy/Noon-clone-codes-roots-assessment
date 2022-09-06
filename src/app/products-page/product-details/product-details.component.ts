import { Component, OnInit } from '@angular/core';
import { bag } from 'src/_models/bag.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
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
    image: string = 'assets/bags/bag-1/1.avif'
    quantity: string = '1';
    bags: bag[] = [{
      image: 'assets/bags/bag-1/1.avif'
    },{
      image: 'assets/bags/bag-1/2.avif'
    },{
      image: 'assets/bags/bag-1/3.avif'
    },{
      image: 'assets/bags/bag-1/4.avif'
    },{
      image: 'assets/bags/bag-1/5.avif'
    },]
    onClick(event: any){
      const htmlElement = (((event as MouseEvent).target as HTMLImageElement).src);
      this.image = htmlElement;

    }
    quntityChanged(event: any){
      console.log(event);
      const htmlElement = (((event as MouseEvent).target as HTMLAnchorElement).text);
      this.quantity = htmlElement;
    }
    ngOnInit(): void {
    }

}
