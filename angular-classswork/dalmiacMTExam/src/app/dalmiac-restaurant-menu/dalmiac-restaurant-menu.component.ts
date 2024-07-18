import { Component, Input } from '@angular/core';
import { RestaurantMenu, Restaurantinfo } from '../dalmiacInterface';

@Component({
  selector: 'app-dalmiac-restaurant-menu',
  templateUrl: './dalmiac-restaurant-menu.component.html',
  styleUrl: './dalmiac-restaurant-menu.component.css',
})
export class DalmiacRestaurantMenuComponent {
  @Input() sharedRestaurantInfo991714375!: Restaurantinfo;
  @Input() sharedRestaurantMenu991714375!: RestaurantMenu[];
}
