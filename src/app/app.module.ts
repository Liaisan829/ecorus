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
import {SwiperCardComponent} from '@components/cards/swiper-card/swiper-card.component';
import {CollectionPointsComponent} from '@pages/collection-points/collection-points.component';
import {MapComponent} from '@components/map/map.component';
import {InputWithIconComponent} from '@components/ui/input-with-icon/input-with-icon.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SelectComponent} from '@components/ui/select/select.component';
import {CheckboxComponent} from '@components/ui/checkbox/checkbox.component';
import {CheckboxGroupComponent} from '@components/ui/checkbox-group/checkbox-group.component';
import {ModalContainerComponent} from '@components/modal-container/modal-container.component';
import {AuthFormComponent} from '@components/forms/auth-form/auth-form.component';
import {FormsHeaderComponent} from '@components/forms/forms-header/forms-header.component';
import {DialogModule} from "@angular/cdk-experimental/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InputComponent} from '@components/ui/input/input.component';
import {IMaskModule} from "angular-imask";
import {SignInWithSmsFormComponent} from '@components/forms/sign-in-with-sms-form/sign-in-with-sms-form.component';
import {SignUpFormComponent} from '@components/forms/sign-up-form/sign-up-form.component';
import {SignUpPartnersFormComponent} from '@components/forms/sign-up-partners-form/sign-up-partners-form.component';
import {SignInPartnersFormComponent} from '@components/forms/sign-in-partners-form/sign-in-partners-form.component';

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
    SwiperCardComponent,
    CollectionPointsComponent,
    MapComponent,
    InputWithIconComponent,
    SelectComponent,
    CheckboxComponent,
    CheckboxGroupComponent,
    ModalContainerComponent,
    AuthFormComponent,
    FormsHeaderComponent,
    InputComponent,
    SignInWithSmsFormComponent,
    SignUpFormComponent,
    SignUpPartnersFormComponent,
    SignInPartnersFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    ReactiveFormsModule,
    DialogModule,
    BrowserAnimationsModule,
    IMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
