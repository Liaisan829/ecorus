import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DialogService} from "@services/dialog.service";
import {SignInWithSmsFormComponent} from "@components/forms/sign-in-with-sms-form/sign-in-with-sms-form.component";
import {SignUpFormComponent} from '../sign-up-form/sign-up-form.component';
import {SignInPartnersFormComponent} from "@components/forms/sign-in-partners-form/sign-in-partners-form.component";

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['../forms.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthFormComponent {
  auth_form!: FormGroup;

  constructor(private fb: FormBuilder, private dialogService: DialogService) {
    this.auth_form = this.fb.group({
      phone_number: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  auth(auth_form: FormGroup) {

  }

  openSignInWithSmsModal() {
    this.dialogService.openDialog(SignInWithSmsFormComponent);
  }

  openSignUpModal() {
    this.dialogService.openDialog(SignUpFormComponent)
  }

  openSignInPartners() {
    this.dialogService.openDialog(SignInPartnersFormComponent)
  }
}
