import { Component, Input } from '@angular/core';
import { Midterm } from '../dalmiacClass';

@Component({
  selector: 'app-footer-dalmiac',
  templateUrl: './footer-dalmiac.component.html',
  styleUrl: './footer-dalmiac.component.css',
})
export class FooterDalmiacComponent {
  @Input() dalmiacMyData!: Midterm;
}
