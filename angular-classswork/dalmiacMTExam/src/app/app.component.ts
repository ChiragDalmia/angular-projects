import { Component } from '@angular/core';
import { Midterm } from './dalmiacClass';
import { Restaurantinfo, RestaurantMenu } from './dalmiacInterface';
import * as data from '../assets/data/mtExam.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dalmiacMTExam';
  dalmiacPersonal: Midterm = {
    LASTdalmiac: 'Dalmia',
    FIRSTdalmiac: 'Chirag',
    EMAILdalmiac: 'dalmiac@sheridancollege.ca',
    PROGRAMNAMEdalmiac: 'Computer Programming',
    LOGINDalmiac: 'dalmiac',
  };

  dalmiacRestaurantinfoJSON: Restaurantinfo = (data as any).restaurantInfo;
  dalmiacRestaurantMenuJSON: RestaurantMenu[] = (data as any).menuItems;
}
