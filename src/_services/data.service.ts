import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getMainMenu(url: string) {
    return this.http.post(url,{
      "googleId" : "ChIJ88rv8bI_WBQRkvVBLDeZQUg"
      },
      {headers:{"lang": "en"}})
  }
}
