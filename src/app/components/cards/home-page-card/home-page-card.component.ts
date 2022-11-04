import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page-card',
  templateUrl: './home-page-card.component.html',
  styleUrls: ['./home-page-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageCardComponent {
  @Input() title!: string
  @Input() subtitle!: string
  @Input() img!: string
  @Input() link!: string

  constructor(private sanitizer: DomSanitizer, private router: Router) {
    sanitizer.bypassSecurityTrustHtml(this.title)
    sanitizer.bypassSecurityTrustHtml(this.subtitle)
  }

  redirect() {
    this.router.navigate([this.link])
  }

}
