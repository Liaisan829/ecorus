import {Injectable} from '@angular/core';

export interface collectionPoint {
  id: number,
  img: any,
  address: string,
  fullAddress: string
  phone: string,
  materials: string,
  timetable: string[],
  shop: string,
  items: string[]
}

@Injectable({
  providedIn: 'root'
})
export class CollectionPointsService {
  collectionPoints: Array<collectionPoint> = [
    {
      id: 1,
      img: '/assets/img/collectionPointsCard.svg',
      address: 'ул.Кремлёвская, 88',
      fullAddress: 'Казань, Кремлёвская, 88',
      phone: '+7 (917) 888 88 88',
      materials: 'Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы...',
      timetable: ['Пн - Пт  08:00 - 20:00\n', 'Сб - Вс  10:00 - 18:00'],
      shop: 'H&M',
      items: ['Пластик: от 5 кг', 'Стекло: от 2 кг', 'Стекло: от 2 кг']

    },
    {
      id: 2,
      img: '/assets/img/collectionPointsCard.svg',
      address: 'ул.Кремлёвская, 88',
      fullAddress: 'Казань, Кремлёвская, 88',
      phone: '+7 (917) 355 35 35',
      materials: 'Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы...',
      timetable: ['Пн - Пт  08:00 - 20:00\n', 'Сб - Вс  10:00 - 18:00'],
      shop: 'Adidas',
      items: ['Пластик: от 5 кг', 'Стекло: от 2 кг']
    },
    {
      id: 3,
      img: '/assets/img/collectionPointsCard.svg',
      address: 'ул.Кремлёвская, 88',
      fullAddress: 'Казань, Кремлёвская, 88',
      phone: '+7 (917) 211 21 21',
      materials: 'Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы...',
      timetable: ['Пн - Пт  08:00 - 20:00\n', 'Сб - Вс  10:00 - 18:00'],
      shop: 'NIKE',
      items: ['Пластик: от 5 кг', 'Стекло: от 2 кг']
    }
  ]
}
