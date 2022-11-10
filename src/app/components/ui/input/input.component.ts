import {ChangeDetectionStrategy, Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }]
})
export class InputComponent implements ControlValueAccessor {
  @Input() hasMaskNumber: boolean = false;
  @Input() type: 'text' | 'password' | 'email' = 'text'
  @Input() placeholder: string = '';
  value: string = '';

  maskVal = {
    mask: '+7{(}900{)}{ }000{ }00{ }00'
  }

  constructor(private sanitizer: DomSanitizer) {
    sanitizer.bypassSecurityTrustHtml(this.placeholder)
  }

  onChangeCallback = (v: string) => {
  }
  onTouchedCallback = () => {
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  writeValue(value: string): void {
    this.value = value
  }

  onChange(value: any): void {
    this.value = value.target.value
    this.onChangeCallback(value.target.value)
    this.onTouchedCallback();
  }
}
