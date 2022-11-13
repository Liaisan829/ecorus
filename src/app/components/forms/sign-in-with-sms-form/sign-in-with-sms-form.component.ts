import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DialogService} from "@services/dialog.service";
import {AuthFormComponent} from "@components/forms/auth-form/auth-form.component";
import {SignInPartnersFormComponent} from "@components/forms/sign-in-partners-form/sign-in-partners-form.component";
import {CodeValidator, PhoneNumberValidator} from "@utils/validations.utils";

@Component({
  selector: 'app-sign-in-with-sms-form',
  templateUrl: './sign-in-with-sms-form.component.html',
  styleUrls: ['../forms.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInWithSmsFormComponent {
  step: number = 1
  sms_form!: FormGroup

  constructor(private fb: FormBuilder, private dialogService: DialogService) {
    this.sms_form = this.fb.group({
      phone_number: ['', [...PhoneNumberValidator]],
      code: ['', [...CodeValidator]]
    })
  }

  auth(form: FormGroup) {
    if (this.step === 1) {
      this.step++
    } else {
      //собираем данные и отправляем
    }
  }

  openAuthModal() {
    this.dialogService.openDialog(AuthFormComponent)
  }

  openSignInPartners() {
    this.dialogService.openDialog(SignInPartnersFormComponent)
  }

  hasError(formControlName: string, errorName: string) {
    return (this.sms_form.get(formControlName)?.touched || this.sms_form.get(formControlName)?.dirty) && this.sms_form.get(formControlName)?.hasError(errorName)
  }
}
