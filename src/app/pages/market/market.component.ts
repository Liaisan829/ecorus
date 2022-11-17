import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketComponent {
  headersFilters: Array<string> = ['По популярности', 'По цене', 'По новизне']
  genderFilters: Array<string> = ['Мужской', 'Женский']
  categoryFilters: Array<string> = ['Одежда', 'Обувь', 'Аксессуары']
  brandFilters: Array<string> = ['H&M', 'P&B', 'Adidas', 'Nike', 'Rebook', 'H&M', 'P&B', 'Adidas', 'Nike', 'Rebook', 'H&M', 'P&B', 'Adidas', 'Nike', 'Rebook']


  openBottomSheetFilters(){

  }
}
