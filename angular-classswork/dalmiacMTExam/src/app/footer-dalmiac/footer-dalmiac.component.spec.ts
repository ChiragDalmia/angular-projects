import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDalmiacComponent } from './footer-dalmiac.component';

describe('FooterDalmiacComponent', () => {
  let component: FooterDalmiacComponent;
  let fixture: ComponentFixture<FooterDalmiacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterDalmiacComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterDalmiacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
