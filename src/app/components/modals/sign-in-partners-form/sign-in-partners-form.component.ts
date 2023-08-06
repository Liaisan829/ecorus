import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SignInWithSmsFormComponent} from "@components/modals/sign-in-with-sms-form/sign-in-with-sms-form.component";
import {SignUpPartnersFormComponent} from "@components/modals/sign-up-partners-form/sign-up-partners-form.component";
import {EmailValidator, PasswordValidator} from "@utils/validations.utils";
import {Dialog, DialogRef} from "@angular/cdk/dialog";

@Component({
	selector: 'app-sign-in-partners-form',
	templateUrl: './sign-in-partners-form.component.html',
	styleUrls: ['../forms.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInPartnersFormComponent {
	partners_form!: FormGroup

	constructor(private fb: FormBuilder, private dialog: Dialog, private dialogRef: DialogRef) {
		this.partners_form = this.fb.group({
			email: ['', [...EmailValidator]],
			password: ['', [...PasswordValidator]]
		})
	}

	auth(form: FormGroup) {
		this.dialogRef.close(true);
	}

	openSignInWithSmsModal() {
		this.dialog.open(SignInWithSmsFormComponent)
	}

	openSignUpPartnersModal() {
		this.dialog.open(SignUpPartnersFormComponent)
	}

	hasError(formControlName: string, errorName: string) {
		return (this.partners_form.get(formControlName)?.touched || this.partners_form.get(formControlName)?.dirty) && this.partners_form.get(formControlName)?.hasError(errorName)
	}
}
