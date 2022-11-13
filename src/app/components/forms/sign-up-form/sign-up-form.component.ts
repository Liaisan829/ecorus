import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DialogService} from "@services/dialog.service";
import {SignInWithSmsFormComponent} from "@components/forms/sign-in-with-sms-form/sign-in-with-sms-form.component";
import {SignInPartnersFormComponent} from "@components/forms/sign-in-partners-form/sign-in-partners-form.component";
import {AuthFormComponent} from '../auth-form/auth-form.component';
import {PasswordValidator, PhoneNumberValidator} from "@utils/validations.utils";

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
      phone_number: ['', [...PhoneNumberValidator]],
      password: ['', [...PasswordValidator]]
    })
  }

  auth(auth_form: FormGroup) {
    this.dialogService.closeDialog()
    console.log(this.sign_up_form.value)
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

  hasError(formControlName: string, errorName: string) {
    return (this.sign_up_form.get(formControlName)?.touched || this.sign_up_form.get(formControlName)?.dirty) && this.sign_up_form.get(formControlName)?.hasError(errorName)
  }
}
