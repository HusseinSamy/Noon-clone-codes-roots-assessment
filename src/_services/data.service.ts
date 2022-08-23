import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  header: HttpHeaders =  new HttpHeaders({'lang': 'en'});
  body = {"googleId" : "ChIJ88rv8bI_WBQRkvVBLDeZQUg"}
  getMainMenu(url: string) {
    return this.http.post(url,this.body,{headers: this.header});
    }
}
