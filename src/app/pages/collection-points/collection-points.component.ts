import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-points',
  templateUrl: './collection-points.component.html',
  styleUrls: ['./collection-points.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionPointsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
