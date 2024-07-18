import { Component } from '@angular/core';
import { A2Personal, MyBook, CampusData } from './dalmiacInterface';
import * as data from '../assets/data/Assignment02.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dalmiacPersonal: A2Personal = data.a2Personal;
  dalmiacBooks: MyBook[] = data.myBooks;
  dalmiacCampus: CampusData[] = data.campusData;
}
