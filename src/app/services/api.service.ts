import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) {}

  baseUrl = 'http://localhost:5000/';

  getCurrencies(params: any): any {
    const paramString = this.createCurrenciesQuery(params);
    return this.http.get<any>(`${this.baseUrl}currencies/?${paramString}`);
  }

  createCurrenciesQuery(params: any): string {
    return new HttpParams({ fromObject: params }).toString();
  }
}
