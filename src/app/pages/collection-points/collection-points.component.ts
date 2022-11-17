import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {ComponentPortal, Portal} from "@angular/cdk/portal";
import {ActivatedRoute} from "@angular/router";
import {BottomSheetService} from "@services/bottom-sheet.service";
import {
  CollectionPointsFiltersComponent
} from "@components/bottom-sheets/collection-points-filters/collection-points-filters.component";
import {
  CollectionPointsCardsListComponent
} from "@components/collection-points-cards-list/collection-points-cards-list.component";
import {
  CollectionPointsFullCardComponent
} from "@components/cards/collection-points-full-card/collection-points-full-card.component";

@Component({
  selector: 'app-collection-points',
  templateUrl: './collection-points.component.html',
  styleUrls: ['./collection-points.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionPointsComponent {
  arrMaterials = ['Стекло', 'Бумага', 'Металл']
  arrShops = ['H&M', 'P&B', 'Adidas', 'H&M', 'P&B', 'Adidas', 'H&M', 'P&B', 'Adidas']

  selectedPortal!: Portal<any>
  cardPortal!: ComponentPortal<any>
  listCardPortal!: ComponentPortal<any>

  constructor(private bottomSheetService: BottomSheetService,
              private route: ActivatedRoute,
              private cdk: ChangeDetectorRef) {

    this.route.queryParams.subscribe(value => {
      if (value['idCollectionPointCard']) {
        this.selectedPortal = this.cardPortal
      } else {
        this.selectedPortal = this.listCardPortal
      }
    })
  }

  openBottomSheetFilters(): void {
    this.bottomSheetService.openDialog(CollectionPointsFiltersComponent)
  }

  openBottomSheetListCollectionPoint() {
    // this.bottomSheetService.openDialog(ListCollectionPointsComponent)
  }

  ngAfterViewInit(): void {
    this.cardPortal = new ComponentPortal<any>(CollectionPointsFullCardComponent)
    this.listCardPortal = new ComponentPortal<any>(CollectionPointsCardsListComponent)
    this.selectedPortal = this.listCardPortal
    this.cdk.detectChanges()
  }
}
