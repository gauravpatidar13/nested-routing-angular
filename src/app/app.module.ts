import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ComplexComponent } from './complex/complex.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { SayComponent } from './say/say.component';
import { WatchComponent } from './watch/watch.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import {OwlModule} from 'ngx-owl-carousel';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShowcaseComponent,
    ComplexComponent,
    FeaturesComponent,
    PricingComponent,
    SayComponent,
    WatchComponent,
    NewsletterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
