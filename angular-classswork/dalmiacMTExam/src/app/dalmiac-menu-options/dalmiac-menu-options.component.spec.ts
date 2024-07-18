import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DalmiacMenuOptionsComponent } from './dalmiac-menu-options.component';

describe('DalmiacMenuOptionsComponent', () => {
  let component: DalmiacMenuOptionsComponent;
  let fixture: ComponentFixture<DalmiacMenuOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DalmiacMenuOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DalmiacMenuOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
