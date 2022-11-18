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
import { BottomSheetContainerComponent } from '@components/bottom-sheet-container/bottom-sheet-container.component';
import { CollectionPointsFiltersComponent } from '@components/bottom-sheets/collection-points-filters/collection-points-filters.component';
import { BottomSheetWrapperComponent } from '@components/bottom-sheets/bottom-sheet-wrapper/bottom-sheet-wrapper.component';
import { CollectionPointsCardComponent } from '@components/cards/collection-points-card/collection-points-card.component';
import { CollectionPointsCardsListComponent } from '@components/collection-points-cards-list/collection-points-cards-list.component';
import { CollectionPointsFullCardComponent } from '@components/cards/collection-points-full-card/collection-points-full-card.component';
import { ButtonPrevPageComponent } from '@components/ui/button-prev-page/button-prev-page.component';
import { MarketComponent } from '@pages/market/market.component';
import { ProductCardComponent } from '@components/cards/product-card/product-card.component';

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
    SignInPartnersFormComponent,
    BottomSheetContainerComponent,
    CollectionPointsFiltersComponent,
    BottomSheetWrapperComponent,
    CollectionPointsCardComponent,
    CollectionPointsCardsListComponent,
    CollectionPointsFullCardComponent,
    ButtonPrevPageComponent,
    MarketComponent,
    ProductCardComponent
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
