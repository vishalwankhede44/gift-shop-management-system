import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShowAllOrdersComponent } from './admin-show-all-orders.component';

describe('AdminShowAllOrdersComponent', () => {
  let component: AdminShowAllOrdersComponent;
  let fixture: ComponentFixture<AdminShowAllOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminShowAllOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminShowAllOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
