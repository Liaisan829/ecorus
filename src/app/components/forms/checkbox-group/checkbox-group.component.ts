import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxGroupComponent implements OnInit {
  @Input() arrCheckboxesTitles!: Array<any>
  @Input() hasSelectAll: boolean = false
  @Input() checkboxesGroupTitle: string = ''

  form: FormGroup

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      'selects': new FormArray([]),
      'selectAll': false
    })

    this.form.controls['selectAll'].valueChanges.subscribe(selectAll => {
      const arr = <FormArray>this.form.controls['selects']
      for (let i = 0; i < arr.length; i++) {
        arr.controls[i].setValue(selectAll)
      }
    })

  }

  ngOnInit(): void {
    this.arrCheckboxesTitles.forEach(value => {
      (this.getSelectsInfo()).push(this.fb.control(false))
    })
  }

  getSelectsInfo() {
    return this.form.controls['selects'] as FormArray;
  }

}
