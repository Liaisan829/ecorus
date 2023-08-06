import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SignInPartnersFormComponent} from "@components/modals/sign-in-partners-form/sign-in-partners-form.component";
import {CompanyNameValidator, EmailValidator, PasswordValidator} from "@utils/validations.utils";
import {Dialog, DialogRef} from "@angular/cdk/dialog";

@Component({
	selector: 'app-sign-up-partners-form',
	templateUrl: './sign-up-partners-form.component.html',
	styleUrls: ['../forms.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpPartnersFormComponent {
	partners_form!: FormGroup

	constructor(private fb: FormBuilder, private dialog: Dialog, private dialogRef: DialogRef) {
		this.partners_form = this.fb.group({
			company: ['', [...CompanyNameValidator]],
			email: ['', [...EmailValidator]],
			password: ['', [...PasswordValidator]]
		})
	}

	auth(form: FormGroup) {
		this.dialogRef.close(true);
	}

	openSignInPartnersModal() {
		this.dialog.open(SignInPartnersFormComponent)
	}

	hasError(formControlName: string, errorName: string) {
		return (this.partners_form.get(formControlName)?.touched || this.partners_form.get(formControlName)?.dirty) && this.partners_form.get(formControlName)?.hasError(errorName)
	}
}
