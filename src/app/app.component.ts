import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private api: ApiService,
  ) {}

  title = 'crypto-app';
  coins: any = [];

  ngOnInit(): void {
    this.api.getCurrencies().subscribe((data: any) => {
      this.coins = data;
    });
  }
}
