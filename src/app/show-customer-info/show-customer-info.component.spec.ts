import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCustomerInfoComponent } from './show-customer-info.component';

describe('ShowCustomerInfoComponent', () => {
  let component: ShowCustomerInfoComponent;
  let fixture: ComponentFixture<ShowCustomerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCustomerInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCustomerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
