import { Component, Input, OnInit } from '@angular/core';
import { DalmiacPersonal } from '../classDalmiac';

@Component({
  selector: 'app-header-dalmiac',
  templateUrl: './header-dalmiac.component.html',
  styleUrls: ['./header-dalmiac.component.css'],
})
export class HeaderDalmiacComponent implements OnInit {
  @Input() dalmiacChild!: DalmiacPersonal;
  currentDate: Date = new Date();

  ngOnInit() {}
}
