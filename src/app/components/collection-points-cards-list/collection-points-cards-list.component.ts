import {ChangeDetectionStrategy, Component} from '@angular/core';
import {collectionPoint, CollectionPointsService} from "@services/collection-points.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-collection-points-cards-list',
  templateUrl: './collection-points-cards-list.component.html',
  styleUrls: ['./collection-points-cards-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionPointsCardsListComponent {
  collectionPoints: Array<collectionPoint> = this.collectionPointsService.collectionPoints;

  constructor(
    private collectionPointsService: CollectionPointsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  addToQueryParams() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        idCollectionPointCard: '123'
      }
    })
  }

}
