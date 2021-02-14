import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'coin-card',
  templateUrl: './coin-card.component.html',
  styleUrls: ['./coin-card.component.css']
})
export class CoinCardComponent {
  @Input() coin: any;
  @Output() updateCryptos = new EventEmitter();

  constructor(
    private localStorage: LocalStorageService,
  ){}

  removeCard(coin: string): void {
    this.localStorage.removeArrayItem('cryptos', coin);
    this.updateCryptos.emit();
  }
}
