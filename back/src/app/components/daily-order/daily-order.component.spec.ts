import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyOrderComponent } from './daily-order.component';

describe('DailyOrderComponent', () => {
  let component: DailyOrderComponent;
  let fixture: ComponentFixture<DailyOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
