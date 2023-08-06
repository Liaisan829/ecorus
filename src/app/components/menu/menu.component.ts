import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AuthFormComponent} from "@components/modals/auth-form/auth-form.component";
import {Dialog, DialogRef} from '@angular/cdk/dialog';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
	userAuth = window.localStorage.getItem('token');

	constructor(private dialog: Dialog, private dialogRef: DialogRef) {
	}

	closeModal() {
		this.dialogRef.close()
	}

	openModal() {
		this.dialog.open(AuthFormComponent)
	}

}
