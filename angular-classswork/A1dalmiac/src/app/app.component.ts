import { Component } from '@angular/core';
import { DalmiacCountry, DalmiacPersonal } from './classDalmiac';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'A1dalmiac';
  PERdalmiac = new DalmiacPersonal();
  CTRYdalmiac = new DalmiacCountry();
}
