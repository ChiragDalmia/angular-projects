import { Component, Input, OnInit } from '@angular/core';
import { RestaurantMenu } from '../dalmiacInterface';

@Component({
  selector: 'app-dalmiac-menu-options',
  templateUrl: './dalmiac-menu-options.component.html',
  styleUrls: ['./dalmiac-menu-options.component.css'],
})
export class DalmiacMenuOptionsComponent implements OnInit {
  @Input() sharedRestaurantMenu991714375!: RestaurantMenu[];

  sectionOptions: string[] = [];
  selectedSection: string = '';
  filteredMenu: RestaurantMenu[] = [];

  ngOnInit(): void {
    this.sectionOptions = [
      ...new Set(
        this.sharedRestaurantMenu991714375.map((item) => item.section)
      ),
    ];
  }

  onSectionChange(section: string): void {
    this.selectedSection = section;
    this.filteredMenu = this.sharedRestaurantMenu991714375.filter(
      (item) => item.section === section
    );
  }
}
