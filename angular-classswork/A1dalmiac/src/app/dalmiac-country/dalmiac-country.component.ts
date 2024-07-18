import { Component, Input } from '@angular/core';
import { DalmiacCountry } from '../classDalmiac';

@Component({
  selector: 'app-dalmiac-country',
  templateUrl: './dalmiac-country.component.html',
  styleUrl: './dalmiac-country.component.css',
})
export class DalmiacCountryComponent {
  @Input() dalmiacData!: DalmiacCountry;
}
