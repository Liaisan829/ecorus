import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-with-icon',
  templateUrl: './input-with-icon.component.html',
  styleUrls: ['./input-with-icon.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputWithIconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
