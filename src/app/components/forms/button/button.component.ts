import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() type: 'submit' | 'button' | 'reset' = 'button';
  @Input() theme: 'GREEN' | 'GREY' | 'DEFAULT' | 'ECO' | 'FILTER' | 'WHITE' = 'GREEN';
  @Input() color?: string
  @Input() text!: string
  @Input() wide: boolean = false;
  @Input() disabled: boolean = false;
  @Output() submit = new EventEmitter();

  constructor(private sanitizer: DomSanitizer) {
    this.sanitizer.bypassSecurityTrustHtml(this.text)
  }
}
