import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from '@components/header/header.component';
import {FooterComponent} from '@components/footer/footer.component';
import {BaselayoutComponent} from '@containers/baselayout/baselayout.component';
import {HomeComponent} from '@pages/home/home.component';
import {SvgIconComponent} from '@components/ui/svg-icon/svg-icon.component';
import {ButtonComponent} from '@components/ui/button/button.component';
import {ButtonWithIconComponent} from '@components/ui/button-with-icon/button-with-icon.component';
import {HomePageCardComponent} from '@components/cards/home-page-card/home-page-card.component';
import {SwiperModule} from "swiper/angular";
import {SwiperComponent} from '@components/swiper/swiper.component';
import { SwiperCardComponent } from './components/cards/swiper-card/swiper-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BaselayoutComponent,
    HomeComponent,
    SvgIconComponent,
    ButtonComponent,
    ButtonWithIconComponent,
    HomePageCardComponent,
    SwiperComponent,
    SwiperCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
