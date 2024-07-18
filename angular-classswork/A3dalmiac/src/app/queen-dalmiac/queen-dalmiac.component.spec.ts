import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueenDalmiacComponent } from './queen-dalmiac.component';

describe('QueenDalmiacComponent', () => {
  let component: QueenDalmiacComponent;
  let fixture: ComponentFixture<QueenDalmiacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QueenDalmiacComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QueenDalmiacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
