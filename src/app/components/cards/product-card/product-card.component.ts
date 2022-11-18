import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
  @Input() brand!: string
  @Input() title!: string
  @Input() posterImg!: string
  @Input() category!: string
  @Input() cost!: number

  constructor(private sanitizer: DomSanitizer) {
    this.sanitizer.bypassSecurityTrustHtml(this.brand)
    this.sanitizer.bypassSecurityTrustHtml(this.title)
    this.sanitizer.bypassSecurityTrustHtml(this.category)
  }

}
