import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DialogService} from "@services/dialog.service";
import {AuthFormComponent} from "@components/forms/auth-form/auth-form.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  constructor(private dialogService: DialogService) {
  }

  openMenu() {
    console.log("open menu")
  }

  openAuthDialog() {
    this.dialogService.openDialog(AuthFormComponent)
  }
}
