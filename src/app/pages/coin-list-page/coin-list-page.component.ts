import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'coin-list-page',
  templateUrl: './coin-list-page.component.html',
  styleUrls: ['./coin-list-page.component.css']
})
export class CoinListPageComponent implements OnInit {

  constructor(
    private api: ApiService,
  ) {}
  coins: Array<any> = [];

  ngOnInit(): void {
    this.api.getCurrencies().subscribe((data: any) => {
      this.coins = data;
    });
  }

}
