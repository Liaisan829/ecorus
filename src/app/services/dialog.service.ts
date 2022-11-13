import { Injectable } from '@angular/core';
import { ComponentType } from '@angular/cdk/overlay';
import { ModalContainerComponent } from '@components/modal-container/modal-container.component';
import { Dialog, DialogConfig, DialogRef } from '@angular/cdk-experimental/dialog';

@Injectable({
  providedIn: 'root'
})

export class DialogService {

  constructor(private dialog: Dialog) {
  }

  openDialog<T>(component: ComponentType<T>, config: DialogConfig = {}): DialogRef<ModalContainerComponent> {
    this.dialog.closeAll();
    return this.dialog.openFromComponent(component, {
      maxWidth: 'none',
      ...config,
      containerComponent: ModalContainerComponent
    });
  }

  closeDialog = () => {
    this.dialog.closeAll()
  }
}
