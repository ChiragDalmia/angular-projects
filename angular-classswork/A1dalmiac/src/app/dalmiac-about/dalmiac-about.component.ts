import { Component, Input } from '@angular/core';
import { DalmiacPersonal } from '../classDalmiac';

@Component({
  selector: 'app-dalmiac-about',
  templateUrl: './dalmiac-about.component.html',
  styleUrls: ['./dalmiac-about.component.css'],
})
export class DalmiacAboutComponent {
  @Input() dalmiacMe!: DalmiacPersonal;
}
