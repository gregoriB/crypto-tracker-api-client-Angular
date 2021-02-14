import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) {}

  baseUrl = 'http://localhost:5000/';

  getCurrencies(): any {
    return this.http.get<any>(this.baseUrl + 'currencies');
  }
}
