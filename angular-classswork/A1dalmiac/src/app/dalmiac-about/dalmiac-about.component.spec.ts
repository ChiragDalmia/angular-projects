import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DalmiacAboutComponent } from './dalmiac-about.component';

describe('DalmiacAboutComponent', () => {
  let component: DalmiacAboutComponent;
  let fixture: ComponentFixture<DalmiacAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DalmiacAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DalmiacAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
