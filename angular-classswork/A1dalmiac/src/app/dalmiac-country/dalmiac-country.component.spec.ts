import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DalmiacCountryComponent } from './dalmiac-country.component';

describe('DalmiacCountryComponent', () => {
  let component: DalmiacCountryComponent;
  let fixture: ComponentFixture<DalmiacCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DalmiacCountryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DalmiacCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
