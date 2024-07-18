import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DalmiacRestaurantMenuComponent } from './dalmiac-restaurant-menu.component';

describe('DalmiacRestaurantMenuComponent', () => {
  let component: DalmiacRestaurantMenuComponent;
  let fixture: ComponentFixture<DalmiacRestaurantMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DalmiacRestaurantMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DalmiacRestaurantMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
