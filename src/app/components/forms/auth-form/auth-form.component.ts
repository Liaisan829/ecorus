import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DialogService} from "@services/dialog.service";
import {SignInWithSmsFormComponent} from "@components/forms/sign-in-with-sms-form/sign-in-with-sms-form.component";
import {SignUpFormComponent} from '../sign-up-form/sign-up-form.component';
import {SignInPartnersFormComponent} from "@components/forms/sign-in-partners-form/sign-in-partners-form.component";
import {PasswordValidator, PhoneNumberValidator} from "@utils/validations.utils";

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
      phone_number: ['', [...PhoneNumberValidator]],
      password: ['', [...PasswordValidator]]
    })
  }

  auth(auth_form: FormGroup) {
    this.dialogService.closeDialog()
    console.log(auth_form.value)
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

  hasError(formControlName: string, errorName: string) {
    return (this.auth_form.get(formControlName)?.touched || this.auth_form.get(formControlName)?.dirty) && this.auth_form.get(formControlName)?.hasError(errorName)
  }
}
