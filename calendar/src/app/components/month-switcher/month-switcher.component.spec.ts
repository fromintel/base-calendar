import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MonthSwitcherComponent } from './month-switcher.component';

describe('MonthSwitcherComponent', () => {
  let component: MonthSwitcherComponent;
  let fixture: ComponentFixture<MonthSwitcherComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthSwitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
