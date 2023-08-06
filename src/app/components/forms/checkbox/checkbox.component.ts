import {ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true
  }]
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() title!: string
  value: boolean = false

  constructor(private cdr: ChangeDetectorRef) {
  }

  onClick() {
    this.value = !this.value
    this.onChangeCallback(this.value)
    this.onTouchedCallback()

  }

  onChangeCallback = (v: any) => {
  };
  onTouchedCallback = () => {
  };


  registerOnChange(fn: any): void {
    this.onChangeCallback = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn
  }

  writeValue(val: boolean): void {
    this.value = val
    this.cdr.markForCheck()
  }
}
