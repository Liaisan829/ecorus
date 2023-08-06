import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SignInWithSmsFormComponent} from "@components/modals/sign-in-with-sms-form/sign-in-with-sms-form.component";
import {SignInPartnersFormComponent} from "@components/modals/sign-in-partners-form/sign-in-partners-form.component";
import {AuthFormComponent} from '../auth-form/auth-form.component';
import {PasswordValidator, PhoneNumberValidator} from "@utils/validations.utils";
import {Dialog, DialogRef} from '@angular/cdk/dialog';

@Component({
	selector: 'app-sign-up-form',
	templateUrl: './sign-up-form.component.html',
	styleUrls: ['../forms.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpFormComponent {
	sign_up_form!: FormGroup

	constructor(private fb: FormBuilder, private dialog: Dialog, private dialogRef: DialogRef) {
		this.sign_up_form = this.fb.group({
			phone_number: ['', [...PhoneNumberValidator]],
			password: ['', [...PasswordValidator]]
		})
	}

	auth(auth_form: FormGroup) {
		this.dialogRef.close();
		console.log(this.sign_up_form.value)
	}

	openSignInWithSmsModal() {
		this.dialog.open(SignInWithSmsFormComponent);
	}

	openAuthModal() {
		this.dialog.open(AuthFormComponent)
	}

	openSignInPartners() {
		this.dialog.open(SignInPartnersFormComponent)
	}

	hasError(formControlName: string, errorName: string) {
		return (this.sign_up_form.get(formControlName)?.touched || this.sign_up_form.get(formControlName)?.dirty) && this.sign_up_form.get(formControlName)?.hasError(errorName)
	}
}
