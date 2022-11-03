import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-swiper-card',
  templateUrl: './swiper-card.component.html',
  styleUrls: ['./swiper-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwiperCardComponent {
  @Input() title!: string
  @Input() subtitle!: string
  @Input() btn!: string
  @Input() img!: string
  @Input() back_color: 'GREEN' | 'BLUE' | 'YELLOW' = 'GREEN';
  @Input() link: string = '';


  constructor(private sanitizer: DomSanitizer) {
    sanitizer.bypassSecurityTrustHtml(this.title)
    sanitizer.bypassSecurityTrustHtml(this.subtitle)
    sanitizer.bypassSecurityTrustHtml(this.btn)
  }
}
