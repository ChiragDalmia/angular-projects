import { Component, Input, OnInit } from '@angular/core';
import { DalmiacPersonal, DalmiacCountry } from '../classDalmiac';

@Component({
  selector: 'app-dalmiac-pics',
  templateUrl: './dalmiac-pics.component.html',
  styleUrls: ['./dalmiac-pics.component.css'],
})
export class DalmiacPicsComponent implements OnInit {
  @Input() dalmiacMe!: DalmiacPersonal;
  @Input() dalmiacData!: DalmiacCountry;

  dalmiacPersonalImage!: string;
  dalmiacCountryFlag!: string;
  isPersonalImage!: boolean;
  isCountryFlag!: boolean;

  ngOnInit() {
    this.dalmiacPersonalImage = this.dalmiacMe.dalmiacImage;
    this.dalmiacCountryFlag = this.dalmiacData.dalmiacFlag;
    this.isPersonalImage = this.dalmiacMe.dalmiacID === 991714375;
    this.isCountryFlag = this.dalmiacData.dalmiacCountryID === 840;
  }
}
