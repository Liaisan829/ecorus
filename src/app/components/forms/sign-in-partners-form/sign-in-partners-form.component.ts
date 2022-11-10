import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DialogService} from "@services/dialog.service";
import {SignInWithSmsFormComponent} from "@components/forms/sign-in-with-sms-form/sign-in-with-sms-form.component";
import {SignUpPartnersFormComponent} from "@components/forms/sign-up-partners-form/sign-up-partners-form.component";

@Component({
  selector: 'app-sign-in-partners-form',
  templateUrl: './sign-in-partners-form.component.html',
  styleUrls: ['../forms.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInPartnersFormComponent {
  partners_form!: FormGroup

  constructor(private fb: FormBuilder, private dialogService: DialogService) {
    this.partners_form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  auth(form: FormGroup) {

  }

  openSignInWithSmsModal() {
    this.dialogService.openDialog(SignInWithSmsFormComponent)
  }

  openSignUpPartnersModal() {
    this.dialogService.openDialog(SignUpPartnersFormComponent)
  }
}
