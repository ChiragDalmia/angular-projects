import { Component, Input } from '@angular/core';
import { A3ClassDalmiac } from '../classDalmiac';

@Component({
  selector: 'app-footer-dalmiac',
  templateUrl: './footer-dalmiac.component.html',
  styleUrl: './footer-dalmiac.component.css',
})
export class FooterDalmiacComponent {
  @Input() HFdalmiac!: A3ClassDalmiac;
}
