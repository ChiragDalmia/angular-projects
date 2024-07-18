import { Component, Input } from '@angular/core';
import { Midterm } from '../dalmiacClass';

@Component({
  selector: 'app-header-dalmiac',
  templateUrl: './header-dalmiac.component.html',
  styleUrls: ['./header-dalmiac.component.css'],
})
export class HeaderDalmiacComponent {
  @Input() dalmiacMyData!: Midterm;
}
