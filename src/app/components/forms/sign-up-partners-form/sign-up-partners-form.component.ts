import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DialogService} from "@services/dialog.service";
import {SignInPartnersFormComponent} from "@components/forms/sign-in-partners-form/sign-in-partners-form.component";
import {CompanyNameValidator, EmailValidator, PasswordValidator} from "@utils/validations.utils";

@Component({
  selector: 'app-sign-up-partners-form',
  templateUrl: './sign-up-partners-form.component.html',
  styleUrls: ['../forms.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpPartnersFormComponent {
  partners_form!: FormGroup

  constructor(private fb: FormBuilder, private dialogService: DialogService) {
    this.partners_form = this.fb.group({
      company: ['', [...CompanyNameValidator]],
      email: ['', [...EmailValidator]],
      password: ['', [...PasswordValidator]]
    })
  }

  auth(form: FormGroup) {

  }

  openSignInPartnersModal(){
    this.dialogService.openDialog(SignInPartnersFormComponent)
  }

  hasError(formControlName: string, errorName: string) {
    return (this.partners_form.get(formControlName)?.touched || this.partners_form.get(formControlName)?.dirty) && this.partners_form.get(formControlName)?.hasError(errorName)
  }
}
