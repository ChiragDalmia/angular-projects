import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DalmiacPicsComponent } from './dalmiac-pics.component';

describe('DalmiacPicsComponent', () => {
  let component: DalmiacPicsComponent;
  let fixture: ComponentFixture<DalmiacPicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DalmiacPicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DalmiacPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
