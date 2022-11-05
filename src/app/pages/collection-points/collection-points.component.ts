import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-collection-points',
  templateUrl: './collection-points.component.html',
  styleUrls: ['./collection-points.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionPointsComponent {
  arrMaterials = ['Стекло', 'Бумага', 'Металл']
  arrShops = ['H&M', 'P&B', 'Adidas', 'H&M', 'P&B', 'Adidas', 'H&M', 'P&B', 'Adidas']

}
