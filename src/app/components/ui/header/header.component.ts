import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AuthFormComponent} from "@components/modals/auth-form/auth-form.component";
import {MenuComponent} from "@components/menu/menu.component";
import {Dialog} from "@angular/cdk/dialog";

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
	userAuth = window.localStorage.getItem('token');

	constructor(private dialog: Dialog) {
	}

	openMenu() {
		this.dialog.open(MenuComponent)
	}

	openAuthDialog() {
		this.dialog.open(AuthFormComponent)
	}
}
