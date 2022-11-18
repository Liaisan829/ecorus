import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MarketService, Product} from "@services/market.service";
import {rotationAnimation} from "../../animations/rotation-animation";

export interface CardData {
  state: 'default' | 'flipped' | 'matched';
  data: Product;
}

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    rotationAnimation
  ]
})
export class MarketComponent {
  productsArray: Array<CardData> = []
  productsDataFromService: Array<Product> = this.marketService.getData()
  headersFilters: Array<string> = ['По популярности', 'По цене', 'По новизне']
  genderFilters: Array<string> = ['Мужской', 'Женский']
  categoryFilters: Array<string> = ['Одежда', 'Обувь', 'Аксессуары']
  brandFilters: Array<string> = ['H&M', 'P&B', 'Adidas', 'Nike', 'Rebook', 'H&M', 'P&B', 'Adidas', 'Nike', 'Rebook', 'H&M', 'P&B', 'Adidas', 'Nike', 'Rebook']

  constructor(private marketService: MarketService) {
    this.productsDataFromService.map(product => this.productsArray.push({
      state: 'default',
      data: product
    }))
  }

  openBottomSheetFilters() {

  }

  cardClicked(product: CardData) {
    if (product.state === 'default') {
      product.state = 'flipped'
    } else {
      product.state = 'default'
    }
  }
}
