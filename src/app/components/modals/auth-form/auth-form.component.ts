import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SignInWithSmsFormComponent} from "@components/modals/sign-in-with-sms-form/sign-in-with-sms-form.component";
import {SignUpFormComponent} from '../sign-up-form/sign-up-form.component';
import {SignInPartnersFormComponent} from "@components/modals/sign-in-partners-form/sign-in-partners-form.component";
import {PasswordValidator, PhoneNumberValidator} from "@utils/validations.utils";
import {Dialog, DialogRef} from "@angular/cdk/dialog";

@Component({
	selector: 'app-auth-form',
	templateUrl: './auth-form.component.html',
	styleUrls: ['../forms.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthFormComponent {
	auth_form!: FormGroup;

	constructor(private fb: FormBuilder, private dialog: Dialog, private dialogRef: DialogRef<AuthFormComponent>) {
		this.auth_form = this.fb.group({
			phone_number: ['', [...PhoneNumberValidator]],
			password: ['', [...PasswordValidator]]
		})

	}

	auth(auth_form: FormGroup) {
		this.dialogRef.close()
	}

	openSignInWithSmsModal() {
		this.dialog.open(SignInWithSmsFormComponent);
	}

	openSignUpModal() {
		this.dialog.open(SignUpFormComponent)
	}

	openSignInPartners() {
		this.dialog.open(SignInPartnersFormComponent)
	}

	hasError(formControlName: string, errorName: string) {
		return (this.auth_form.get(formControlName)?.touched || this.auth_form.get(formControlName)?.dirty) && this.auth_form.get(formControlName)?.hasError(errorName)
	}

	reset() {
		this.auth_form.reset()
	}
}
