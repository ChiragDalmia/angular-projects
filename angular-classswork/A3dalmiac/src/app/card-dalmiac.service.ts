import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardDalmiacService {
  dalmiacChanges(element: any, degrees: number) {
    element.style.transform = `rotate(${degrees}deg)`;
    element.style.transitionDuration = '3s';
  }
}
