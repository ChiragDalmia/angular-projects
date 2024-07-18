import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JackDalmiacComponent } from './jack-dalmiac.component';

describe('JackDalmiacComponent', () => {
  let component: JackDalmiacComponent;
  let fixture: ComponentFixture<JackDalmiacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JackDalmiacComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JackDalmiacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
