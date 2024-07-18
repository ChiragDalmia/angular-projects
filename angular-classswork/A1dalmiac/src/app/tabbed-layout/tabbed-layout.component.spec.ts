import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbedLayoutComponent } from './tabbed-layout.component';

describe('TabbedLayoutComponent', () => {
  let component: TabbedLayoutComponent;
  let fixture: ComponentFixture<TabbedLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabbedLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabbedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
