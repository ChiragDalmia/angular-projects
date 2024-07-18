import { Component, Input } from '@angular/core';
import { A3ClassDalmiac } from '../classDalmiac';

@Component({
  selector: 'app-header-dalmiac',
  templateUrl: './header-dalmiac.component.html',
  styleUrls: ['./header-dalmiac.component.css'],
})
export class HeaderDalmiacComponent {
  @Input() HFdalmiac!: A3ClassDalmiac;
}
