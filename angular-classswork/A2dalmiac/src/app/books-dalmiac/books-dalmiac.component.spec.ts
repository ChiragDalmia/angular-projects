import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksDalmiacComponent } from './books-dalmiac.component';

describe('BooksDalmiacComponent', () => {
  let component: BooksDalmiacComponent;
  let fixture: ComponentFixture<BooksDalmiacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksDalmiacComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooksDalmiacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
