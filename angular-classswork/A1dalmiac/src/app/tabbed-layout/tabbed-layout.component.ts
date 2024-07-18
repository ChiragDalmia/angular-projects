import { Component, Input } from '@angular/core';
import { DalmiacPersonal, DalmiacCountry } from '../classDalmiac';

@Component({
  selector: 'app-tabbed-layout',
  templateUrl: './tabbed-layout.component.html',
  styleUrls: ['./tabbed-layout.component.css'],
})
export class TabbedLayoutComponent {
  @Input() PERdalmiac!: DalmiacPersonal;
  @Input() CTRYdalmiac!: DalmiacCountry;
}
