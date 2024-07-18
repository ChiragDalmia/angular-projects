import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderDalmiacComponent } from './header-dalmiac/header-dalmiac.component';
import { FooterDalmiacComponent } from './footer-dalmiac/footer-dalmiac.component';
import { BooksDalmiacComponent } from './books-dalmiac/books-dalmiac.component';
import { CampusDalmiacComponent } from './campus-dalmiac/campus-dalmiac.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    HeaderDalmiacComponent,
    FooterDalmiacComponent,
    BooksDalmiacComponent,
    CampusDalmiacComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
