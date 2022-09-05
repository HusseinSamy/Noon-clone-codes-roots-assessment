import { Component, OnInit } from '@angular/core';
import { Spec } from 'src/_models/specs.model';

@Component({
  selector: 'app-specifications',
  templateUrl: './specifications.component.html',
  styleUrls: ['./specifications.component.css']
})
export class SpecificationsComponent implements OnInit {

  overview: string = 'Oxford polyester waterproof materials. The bag is a multi-use daily bags for both boys and girls, Its medium-sized, Suitable for school - club - gym - university - lessons and many more other uses. The inner lining is lined with the finest fabrics specially woven for Force Factory with specifications that we have set to be distinguished by strength, texture and aesthetic view that confirms our attention to details even if they are internal. The bag has a main pocket and an internal pocket for the Laptop. And two sub pockets with the same flat luggage space. The back of the bag comes with four layers of fabrics, sponge and foam. The zippers of the bag have been carefully selected to withstand the toughest conditions and are very reliable. The bag comes with dimensions of 43 x 32 x 18. The bag supports the 14 inch laptops only';
  specs: Spec[] = [
    {'Colour Name': 'Red'},
    {'Country of Origin': 'Egypt'},
    {'Department': 'Unisex'},
    {'Exterior Material': 'Comination'},
    {'Material Composition': 'Oxford, Polyster'},
    {'Model Name': 'FDB-20-20'},
    {'Model Number': 'FDB-20-20'},
    {'Season Code': 'Carryover'},
    {'Size': '42x32x18 cm'}
  ];
  show: string = 'overview';

  showSetter(data: string){
    this.show = data;
  }
  showSection(event: MouseEvent){
    console.log(event);
    this.show = (event.target as HTMLParagraphElement).textContent!.toLowerCase()
  }
  getKey(obj: Object){
    return Object.keys(obj);
  }
  getValue(obj: Object){
    return Object.values(obj);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
