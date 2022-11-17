import {Injectable} from '@angular/core';
import {Dialog, DialogConfig, DialogRef} from "@angular/cdk-experimental/dialog";
import {ComponentType} from "@angular/cdk/overlay";
import {ModalContainerComponent} from "@components/modal-container/modal-container.component";
import {BottomSheetContainerComponent} from "@components/bottom-sheet-container/bottom-sheet-container.component";

@Injectable({
  providedIn: 'root'
})
export class BottomSheetService {

  constructor(private bottomSheet: Dialog) {
  }

  openDialog<T>(component: ComponentType<T>, config: DialogConfig = {}): DialogRef<ModalContainerComponent> {
    return this.bottomSheet.openFromComponent(component, {
      maxWidth: 'none',
      ...config,
      containerComponent: BottomSheetContainerComponent,
    });
  }

  closeDialog = () => {
    this.bottomSheet.closeAll()
  }
}
