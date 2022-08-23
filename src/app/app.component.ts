import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/_services/data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private data: DataService) {
  }
  response: Object = {};
  baseUrl: string = `http://satafood.codesroots.com:3000/api`;
  homePageEndpoint: string = `/MobileMainPage/GetHomePage`;
  mainSliderEndpoint: string = `/MobileMainPage/GetMainSliders`;

    mainMenuData() {
      this.data.getMainMenu(this.baseUrl + this.homePageEndpoint).subscribe({
      next: (data) => {
        this.response = data;
        console.log('i have passed the next test');
        console.log(data);

      },
      error: (err) => {
        console.log('i am stuck in the error section');
        return err;
      }
    });
  }
  ngOnInit(): void {
  }
}
