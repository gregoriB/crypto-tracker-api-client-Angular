import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoinCardComponent } from './coin-card/coin-card.component';


@NgModule({
  declarations: [
    CoinCardComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CoinCardComponent,
  ]
})
export class CommonComponentsModule { }
