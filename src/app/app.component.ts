import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    constructor() {}
    
    blackout: boolean;
    showNavBar(data: any) {
      this.blackout = data;
    }
    ngOnInit(): void {}
}
