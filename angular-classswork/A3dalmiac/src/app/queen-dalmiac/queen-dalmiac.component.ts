import { Component } from '@angular/core';
import { CardDalmiacService } from '../card-dalmiac.service';

@Component({
  selector: 'app-queen-dalmiac',
  templateUrl: './queen-dalmiac.component.html',
  styleUrls: ['./queen-dalmiac.component.css'],
})
export class QueenDalmiacComponent {
  dalmiacTitle = 'Queen of Hearts';
  dalmiacSuit = 'hearts';
  dalmiacImage = 'assets/images/queen.png';
  dalmiacDegree = 240;
  dalmiacZero = 0;

  constructor(private cardService: CardDalmiacService) {}

  dalmiacRotate(id: string, degrees: number) {
    const element = document.getElementById(id);
    if (element) {
      this.cardService.dalmiacChanges(element, degrees);
    }
  }
}
