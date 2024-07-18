import { Component, Input } from '@angular/core';
import { MyBook } from '../dalmiacInterface';

@Component({
  selector: 'app-books-dalmiac',
  templateUrl: './books-dalmiac.component.html',
  styleUrl: './books-dalmiac.component.css',
})
export class BooksDalmiacComponent {
  @Input() myBooks991714375!: MyBook[];
}
