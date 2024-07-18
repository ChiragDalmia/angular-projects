import { Component } from '@angular/core';
import { CardDalmiacService } from '../card-dalmiac.service';

@Component({
  selector: 'app-king-dalmiac',
  templateUrl: './king-dalmiac.component.html',
  styleUrls: ['./king-dalmiac.component.css'],
})
export class KingDalmiacComponent {
  dalmiacTitle = 'King of Diamonds';
  dalmiacSuit = 'diamonds';
  dalmiacImage = 'assets/images/king.png';
  dalmiacDegree = 120;
  dalmiacZero = 0;

  constructor(private cardService: CardDalmiacService) {}

  dalmiacRotate(id: string, degrees: number) {
    const element = document.getElementById(id);
    if (element) {
      this.cardService.dalmiacChanges(element, degrees);
    }
  }
}
