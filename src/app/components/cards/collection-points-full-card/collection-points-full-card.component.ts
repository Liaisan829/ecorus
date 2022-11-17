import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-collection-points-full-card',
  templateUrl: './collection-points-full-card.component.html',
  styleUrls: ['./collection-points-full-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionPointsFullCardComponent {
  idCard: string = this.route.snapshot.queryParamMap.get('idCollectionPointCard')!;

  materials: Array<any> = [
    {
      title: 'Пластик',
      count: 5
    },
    {
      title: 'Стекло',
      count: 2
    },
    {
      title: 'Бумага',
      count: 10
    },
    {
      title: 'Батареи',
      count: 2
    },
  ]

  shops: Array<any> = [
    {
      title: 'H&M',
      points: this.materials
    },
    {
      title: 'Adidas',
      points: this.materials
    },
  ]

  constructor(private route: ActivatedRoute) {
  }
}
