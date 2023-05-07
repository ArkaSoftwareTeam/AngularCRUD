import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerViewInformationComponent } from './customer-view-information.component';

describe('CustomerViewInformationComponent', () => {
  let component: CustomerViewInformationComponent;
  let fixture: ComponentFixture<CustomerViewInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerViewInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerViewInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
