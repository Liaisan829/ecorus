import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-baselayout',
  templateUrl: './baselayout.component.html',
  styleUrls: ['./baselayout.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaselayoutComponent {
  @Input() hasFooter: boolean = true
}
