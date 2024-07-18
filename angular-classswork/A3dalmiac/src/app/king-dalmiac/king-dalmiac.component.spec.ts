import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingDalmiacComponent } from './king-dalmiac.component';

describe('KingDalmiacComponent', () => {
  let component: KingDalmiacComponent;
  let fixture: ComponentFixture<KingDalmiacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KingDalmiacComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KingDalmiacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
