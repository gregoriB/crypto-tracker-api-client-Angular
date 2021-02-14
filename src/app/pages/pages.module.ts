import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoinListPageComponent } from './coin-list-page/coin-list-page.component';
import { CommonComponentsModule } from '../components/common-components.module';


@NgModule({
  declarations: [
    CoinListPageComponent,
  ],
  imports: [
    CommonModule,
    CommonComponentsModule,
  ],
  providers: [],
  exports: [
    CoinListPageComponent,
  ]
})
export class PagesModule { }
