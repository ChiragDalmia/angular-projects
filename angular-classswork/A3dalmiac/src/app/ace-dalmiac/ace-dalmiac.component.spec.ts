import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceDalmiacComponent } from './ace-dalmiac.component';

describe('AceDalmiacComponent', () => {
  let component: AceDalmiacComponent;
  let fixture: ComponentFixture<AceDalmiacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AceDalmiacComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AceDalmiacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
