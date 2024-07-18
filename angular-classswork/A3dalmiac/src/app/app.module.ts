import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

import { HeaderDalmiacComponent } from './header-dalmiac/header-dalmiac.component';
import { FooterDalmiacComponent } from './footer-dalmiac/footer-dalmiac.component';
import { AceDalmiacComponent } from './ace-dalmiac/ace-dalmiac.component';
import { KingDalmiacComponent } from './king-dalmiac/king-dalmiac.component';
import { QueenDalmiacComponent } from './queen-dalmiac/queen-dalmiac.component';
import { JackDalmiacComponent } from './jack-dalmiac/jack-dalmiac.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderDalmiacComponent,
    FooterDalmiacComponent,
    AceDalmiacComponent,
    KingDalmiacComponent,
    QueenDalmiacComponent,
    JackDalmiacComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
