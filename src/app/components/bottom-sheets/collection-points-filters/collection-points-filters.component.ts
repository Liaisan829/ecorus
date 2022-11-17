import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BottomSheetService} from "@services/bottom-sheet.service";

@Component({
  selector: 'app-collection-points-filters',
  templateUrl: './collection-points-filters.component.html',
  styleUrls: ['./collection-points-filters.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionPointsFiltersComponent {
  arrMaterials = ['Стекло', 'Бумага', 'Металл']
  arrShops = ['H&M', 'P&B', 'Adidas']

  constructor(private bottomSheetService: BottomSheetService) {
  }

  closeBottomSheet() {
    this.bottomSheetService.closeDialog()
  }

}
