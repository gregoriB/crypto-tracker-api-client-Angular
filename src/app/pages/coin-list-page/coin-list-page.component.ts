import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'coin-list-page',
  templateUrl: './coin-list-page.component.html',
  styleUrls: ['./coin-list-page.component.css']
})
export class CoinListPageComponent implements OnInit {
  coinData: Array<any> = [];
  currentCryptos: any = [];
  newCrypto = '';

  constructor(
    private api: ApiService,
    private localStorage: LocalStorageService,
  ) {}

  ngOnInit(): void {
    this.updateCryptos();
    this.fetchCryptos();
  }

  submitNewCrypto(): void {
    this.updateCryptos(this.newCrypto);
    this.clearForm();
  }

  clearForm(): void {
    this.newCrypto = '';
  }

  resetCoins(): void {
    this.localStorage.clearAllLocalStorage();
    this.currentCryptos = [];
    this.coinData = [];
    this.clearForm();
  }

  fetchCryptos(): void {
    if (this.currentCryptos.length) {
      this.api.getCurrencies({ ids: this.currentCryptos.join(',') })
        .subscribe((data: any) => {
          this.coinData = data;
        });
    }
  }

  updateCryptos(newCrypto = ''): void {
    let storedCryptos = [...this.localStorage.getData('cryptos', []), newCrypto];
    storedCryptos = storedCryptos.filter(crypto => !!crypto);
    const cryptoSet = new Set([...storedCryptos]);
    this.currentCryptos = [...cryptoSet].map(crypto => crypto.toUpperCase());
    this.localStorage.setData('cryptos', this.currentCryptos);
    !this.currentCryptos.length ? this.resetCoins() : this.fetchCryptos();
  }
}
