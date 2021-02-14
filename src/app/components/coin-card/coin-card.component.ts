import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'coin-card',
  templateUrl: './coin-card.component.html',
  styleUrls: ['./coin-card.component.css']
})
export class CoinCardComponent implements OnInit {
  @Input() coin: any;

  ngOnInit(): void {
  }
}
