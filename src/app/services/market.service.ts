import {Injectable} from '@angular/core';

const productImg = '/assets/img/productCard.svg'

export interface Product {
  id: number,
  title: string,
  category: string,
  cost: number,
  posterImg: string,
  brand: string
}

const collectionMock: Array<Product> = [
  {
    id: 1,
    title: 'Nike Air Max 2021',
    category: 'Мужская обувь',
    cost: 1000,
    posterImg: productImg,
    brand: 'NIKE'
  },
  {
    id: 2,
    title: 'Nike Air Max 90 Premium',
    category: 'Мужская обувь',
    cost: 750,
    posterImg: productImg,
    brand: 'NIKE'
  },
  {
    id: 3,
    title: 'Adidas Alphabounce RC',
    category: 'мужская',
    cost: 1200,
    posterImg: productImg,
    brand: 'Adidas'
  },
  {
    id: 4,
    title: 'Nike Air Max 2021',
    category: 'женская',
    cost: 1000,
    posterImg: productImg,
    brand: 'H&M'
  },
  {
    id: 5,
    title: 'Nike Air Force 1 Low',
    category: 'мужская',
    cost: 2100,
    posterImg: productImg,
    brand: 'NIKE'
  }
]

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  getData(): Array<Product> {
    return collectionMock;
  }
}
