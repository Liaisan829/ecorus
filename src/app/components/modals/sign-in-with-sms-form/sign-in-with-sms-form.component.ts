import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthFormComponent} from "@components/modals/auth-form/auth-form.component";
import {SignInPartnersFormComponent} from "@components/modals/sign-in-partners-form/sign-in-partners-form.component";
import {CodeValidator, PhoneNumberValidator} from "@utils/validations.utils";
import {Dialog, DialogRef} from "@angular/cdk/dialog";

@Component({
	selector: 'app-sign-in-with-sms-form',
	templateUrl: './sign-in-with-sms-form.component.html',
	styleUrls: ['../forms.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInWithSmsFormComponent {
	step: number = 1
	sms_form!: FormGroup

	constructor(private fb: FormBuilder, private dialog: Dialog, private dialogRef: DialogRef) {
		this.sms_form = this.fb.group({
			phone_number: ['', [...PhoneNumberValidator]],
			code: ['', [...CodeValidator]]
		})
	}

	auth(form: FormGroup) {
		if (this.step === 1) {
			this.step++
		} else {
			this.dialogRef.close(true);
			//собираем данные и отправляем
		}
	}

	openAuthModal() {
		this.dialog.open(AuthFormComponent)
	}

	openSignInPartners() {
		this.dialog.open(SignInPartnersFormComponent)
	}

	hasError(formControlName: string, errorName: string) {
		return (this.sms_form.get(formControlName)?.touched || this.sms_form.get(formControlName)?.dirty) && this.sms_form.get(formControlName)?.hasError(errorName)
	}
}
