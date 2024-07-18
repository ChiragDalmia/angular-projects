import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDalmiacComponent } from './header-dalmiac.component';

describe('HeaderDalmiacComponent', () => {
  let component: HeaderDalmiacComponent;
  let fixture: ComponentFixture<HeaderDalmiacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderDalmiacComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderDalmiacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
