import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusDalmiacComponent } from './campus-dalmiac.component';

describe('CampusDalmiacComponent', () => {
  let component: CampusDalmiacComponent;
  let fixture: ComponentFixture<CampusDalmiacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampusDalmiacComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampusDalmiacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
