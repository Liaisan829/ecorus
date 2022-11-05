import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ControlValueAccessor, FormControl} from "@angular/forms";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-input-with-icon',
  templateUrl: './input-with-icon.component.html',
  styleUrls: ['./input-with-icon.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputWithIconComponent implements ControlValueAccessor {
  @Input() icon!: string
  @Input() placeholder: string = ''
  @Input() type: 'text' | 'number' | 'password' = 'text'

  constructor(private sanitizer: DomSanitizer) {
    this.sanitizer.bypassSecurityTrustHtml(this.placeholder)
  }

  input: FormControl = new FormControl<any>('')

  onChange: any = (value: any) => {
    this.input.setValue(value);
    this.onChangeCallback(this.input.value);
    this.onTouchedCallback();
  }

  onChangeCallback = (v: any) => {
  };
  onTouchedCallback = () => {
  };


  writeValue(value: any) {
    this.input.setValue(value)
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

}
