import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSellerComponent } from './product-seller.component';

describe('ProductSellerComponent', () => {
  let component: ProductSellerComponent;
  let fixture: ComponentFixture<ProductSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
