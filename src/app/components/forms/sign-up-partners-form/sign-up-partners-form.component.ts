import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DialogService} from "@services/dialog.service";
import {SignInPartnersFormComponent} from "@components/forms/sign-in-partners-form/sign-in-partners-form.component";

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
      company: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  auth(form: FormGroup) {

  }

  openSignInPartnersModal(){
    this.dialogService.openDialog(SignInPartnersFormComponent)
  }
}
