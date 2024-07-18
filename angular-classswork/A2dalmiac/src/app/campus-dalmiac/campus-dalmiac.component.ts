import { Component, Input } from '@angular/core';
import { CampusData } from '../dalmiacInterface';

@Component({
  selector: 'app-campus-dalmiac',
  templateUrl: './campus-dalmiac.component.html',
  styleUrl: './campus-dalmiac.component.css',
})
export class CampusDalmiacComponent {
  @Input() campusData991714375!: CampusData[];
  selectedCampus: string = '';
  campusAddress: string = '';

  onCampusChange(event: any): void {
    const campus = this.campusData991714375.find(
      (c) => c.campus === event.value
    );
    if (campus) {
      this.campusAddress = `${campus.street}, ${campus.city}`;
    }
  }
}
