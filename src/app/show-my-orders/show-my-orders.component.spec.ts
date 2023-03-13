import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowMyOrdersComponent } from './show-my-orders.component';

describe('ShowMyOrdersComponent', () => {
  let component: ShowMyOrdersComponent;
  let fixture: ComponentFixture<ShowMyOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMyOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMyOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
