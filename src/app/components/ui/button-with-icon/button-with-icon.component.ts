import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-button-with-icon',
  templateUrl: './button-with-icon.component.html',
  styleUrls: ['./button-with-icon.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonWithIconComponent {
  @Input() text: string = ''
  @Input() icon!: string
  @Output() submit = new EventEmitter()
  @Input() theme: 'DEFAULT' | 'WHITE' | 'GREY' = 'DEFAULT'

  constructor(private sanitizer: DomSanitizer) {
    this.sanitizer.bypassSecurityTrustHtml(this.text)
  }
}
