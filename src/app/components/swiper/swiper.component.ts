import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import SwiperCore, {Autoplay, Navigation, SwiperOptions} from "swiper";
SwiperCore.use([Navigation, Autoplay])

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SwiperComponent {
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    autoplay: true
  }

  prevSlide(){
    this.config.allowSlidePrev
  }

  nextSlide(){
    this.config.allowSlideNext
  }
}
