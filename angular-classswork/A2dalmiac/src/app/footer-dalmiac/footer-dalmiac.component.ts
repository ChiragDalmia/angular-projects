import { Component, Input } from '@angular/core';
import { A2Personal } from '../dalmiacInterface';

@Component({
  selector: 'app-footer-dalmiac',
  templateUrl: './footer-dalmiac.component.html',
  styleUrl: './footer-dalmiac.component.css',
})
export class FooterDalmiacComponent {
  @Input() dalmiacMyData!: A2Personal;
}
