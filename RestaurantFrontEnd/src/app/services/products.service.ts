import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl: string = "https://localhost:7080/api/products";

  constructor(private http: HttpClient) { }

  getAllProducts(token : string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(this.baseUrl + "/getProducts", { headers });
  }
}
