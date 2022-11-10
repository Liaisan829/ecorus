import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {DialogService} from "@services/dialog.service";

@Component({
  selector: 'app-forms-header',
  templateUrl: './forms-header.component.html',
  styleUrls: ['./forms-header.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormsHeaderComponent {
  @Input() title!: string;

  constructor(private dialogService: DialogService) {
  }

  closeDialog() {
    this.dialogService.closeDialog()
  }
}
