import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderDalmiacComponent } from './header-dalmiac/header-dalmiac.component';
import { FooterDalmiacComponent } from './footer-dalmiac/footer-dalmiac.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderDalmiacComponent,
    FooterDalmiacComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
