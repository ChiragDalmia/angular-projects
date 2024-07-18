import { Component, Input } from '@angular/core';
import { A2Personal } from '../dalmiacInterface';

@Component({
  selector: 'app-header-dalmiac',
  templateUrl: './header-dalmiac.component.html',
  styleUrl: './header-dalmiac.component.css',
})
export class HeaderDalmiacComponent {
  @Input() dalmiacMyData!: A2Personal;
}
