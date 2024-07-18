import { Component } from '@angular/core';
import { CardDalmiacService } from '../card-dalmiac.service';

@Component({
  selector: 'app-ace-dalmiac',
  templateUrl: './ace-dalmiac.component.html',
  styleUrl: './ace-dalmiac.component.css',
})
export class AceDalmiacComponent {
  dalmiacTitle = 'Ace of Spades';
  dalmiacSuit = 'spades';
  dalmiacImage = 'assets/images/ace.png';
  dalmiacDegree = 60;
  dalmiacZero = 0;
  constructor(private cardService: CardDalmiacService) {}

  dalmiacRotate(id: string, degrees: number) {
    const element = document.getElementById(id);
    if (element) {
      this.cardService.dalmiacChanges(element, degrees);
    }
  }
}
