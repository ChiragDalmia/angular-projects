import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

import { HeaderDalmiacComponent } from './header-dalmiac/header-dalmiac.component';
import { TabbedLayoutComponent } from './tabbed-layout/tabbed-layout.component';
import { DalmiacAboutComponent } from './dalmiac-about/dalmiac-about.component';
import { DalmiacCountryComponent } from './dalmiac-country/dalmiac-country.component';
import { DalmiacPicsComponent } from './dalmiac-pics/dalmiac-pics.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderDalmiacComponent,
    TabbedLayoutComponent,
    DalmiacAboutComponent,
    DalmiacCountryComponent,
    DalmiacPicsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
