import { Component } from '@angular/core';
import { CardDalmiacService } from '../card-dalmiac.service';

@Component({
  selector: 'app-jack-dalmiac',
  templateUrl: './jack-dalmiac.component.html',
  styleUrls: ['./jack-dalmiac.component.css'],
})
export class JackDalmiacComponent {
  dalmiacTitle = 'Jack of Clubs';
  dalmiacSuit = 'clubs';
  dalmiacImage = 'assets/images/jack.png';
  dalmiacDegree = 280;
  dalmiacZero = 0;

  constructor(private cardService: CardDalmiacService) {}

  dalmiacRotate(id: string, degrees: number) {
    const element = document.getElementById(id);
    if (element) {
      this.cardService.dalmiacChanges(element, degrees);
    }
  }
}
