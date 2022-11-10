import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DialogService} from "@services/dialog.service";
import {SignInWithSmsFormComponent} from "@components/forms/sign-in-with-sms-form/sign-in-with-sms-form.component";
import {SignInPartnersFormComponent} from "@components/forms/sign-in-partners-form/sign-in-partners-form.component";
import { AuthFormComponent } from '../auth-form/auth-form.component';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['../forms.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpFormComponent {
  sign_up_form!: FormGroup

  constructor(private fb: FormBuilder, private dialogService: DialogService) {
    this.sign_up_form = this.fb.group({
      phone_number: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  auth(auth_form: FormGroup) {

  }

  openSignInWithSmsModal() {
    this.dialogService.openDialog(SignInWithSmsFormComponent);
  }

  openAuthModal() {
    this.dialogService.openDialog(AuthFormComponent)
  }

  openSignInPartners() {
    this.dialogService.openDialog(SignInPartnersFormComponent)
  }
}
