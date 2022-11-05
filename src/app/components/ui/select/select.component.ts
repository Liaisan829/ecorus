import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ControlValueAccessor} from "@angular/forms";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent implements ControlValueAccessor {
  @Input() optionsList: Array<string> = [];
  @Input() selectedOption: string = ''
  show: boolean = false
  value: string = '';

  setShow(): void {
    this.show = !this.show
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

  writeValue(obj: any): void {
  }

  onChange(value: string): void {
    this.value = value
    this.selectedOption = value;
    this.show = false;
    this.onChangeCallback(value)
    this.onTouchedCallback();
  }
}
