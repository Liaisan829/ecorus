import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Location} from '@angular/common'

@Component({
  selector: 'app-button-prev-page',
  templateUrl: './button-prev-page.component.html',
  styleUrls: ['./button-prev-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonPrevPageComponent {

  constructor(private location: Location) {
  }

  returnPage() {
    this.location.back()
  }
}
