import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-collection-points-card',
  templateUrl: './collection-points-card.component.html',
  styleUrls: ['./collection-points-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionPointsCardComponent {
  @Input() img!: string
  @Input() address!: string
  @Input() materials!: string
}
