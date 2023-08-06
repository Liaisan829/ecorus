import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
	selector: 'app-svg-icon',
	templateUrl: './svg-icon.component.html',
	styleUrls: ['./svg-icon.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		'[style.width]': 'this.size',
		'[style.height]': 'this.size',
	}

})
export class SvgIconComponent {
	@Input() name: string = '';
	@Input() size: string = '24px';

	getPath(): string {
		return `/assets/sprite.svg#${this.name}`
	}
}
