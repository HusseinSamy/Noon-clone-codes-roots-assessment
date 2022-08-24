import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private http: HttpClient) {}
    baseUrl: string = `http://satafood.codesroots.com:3000/api`;
    subRequestUrl: string = `http://satafood.codesroots.com:3000`;
    mainSliderEndpoint: string = `/MobileMainPage/GetMainSliders`;

    header: HttpHeaders = new HttpHeaders({ lang: 'en' });
    body = { googleId: 'ChIJ88rv8bI_WBQRkvVBLDeZQUg' };
    PostEndpoints(url: string) {
        return this.http.post(url, this.body, { headers: this.header });
    }
    GetEndpoints(url: string) {
        return this.http.get<any>(url);
    }
}
