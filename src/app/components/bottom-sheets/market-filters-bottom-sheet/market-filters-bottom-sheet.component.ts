import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BottomSheetService} from "@services/bottom-sheet.service";

@Component({
  selector: 'app-market-filters-bottom-sheet',
  templateUrl: './market-filters-bottom-sheet.component.html',
  styleUrls: ['./market-filters-bottom-sheet.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketFiltersBottomSheetComponent {
  headersFilters: Array<string> = ['По популярности', 'По цене', 'По новизне']
  genderFilters: Array<string> = ['Мужской', 'Женский']
  categoryFilters: Array<string> = ['Одежда', 'Обувь', 'Аксессуары']
  brandFilters: Array<string> = ['H&M', 'P&B', 'Adidas', 'Nike', 'Rebook', 'H&M', 'P&B', 'Adidas', 'Nike', 'Rebook', 'H&M', 'P&B', 'Adidas', 'Nike', 'Rebook']

  constructor(private bottomSheetService: BottomSheetService) {
  }

  closeBottomSheet() {
    this.bottomSheetService.closeDialog()
  }
}
