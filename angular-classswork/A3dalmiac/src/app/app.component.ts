import { Component } from '@angular/core';
import { A3ClassDalmiac } from './classDalmiac';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  profileDalmiac = new A3ClassDalmiac();
}
