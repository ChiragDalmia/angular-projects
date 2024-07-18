import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderDalmiacComponent } from './header-dalmiac/header-dalmiac.component';
import { FooterDalmiacComponent } from './footer-dalmiac/footer-dalmiac.component';
import { DalmiacRestaurantMenuComponent } from './dalmiac-restaurant-menu/dalmiac-restaurant-menu.component';
import { DalmiacMenuOptionsComponent } from './dalmiac-menu-options/dalmiac-menu-options.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderDalmiacComponent,
    FooterDalmiacComponent,
    DalmiacRestaurantMenuComponent,
    DalmiacMenuOptionsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
