import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BottomSheetService} from "@services/bottom-sheet.service";

@Component({
  selector: 'app-bottom-sheet-wrapper',
  templateUrl: './bottom-sheet-wrapper.component.html',
  styleUrls: ['./bottom-sheet-wrapper.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BottomSheetWrapperComponent {

  constructor(private bottomSheetService: BottomSheetService) {
  }

  closeBottomSheet(){
    this.bottomSheetService.closeDialog()
  }
}
