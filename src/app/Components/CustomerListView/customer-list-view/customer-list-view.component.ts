import {Component, Input} from '@angular/core';
import {Customer} from "../../../Models/Customer";
import {CustomerService} from "../../../Services/CustomerService/customer.service";

@Component({
  selector: 'app-customer-list-view',
  templateUrl: './customer-list-view.component.html',
  styleUrls: ['./customer-list-view.component.css']
})
export class CustomerListViewComponent {
  customers:Customer[]|any;
  @Input() customerInputValue:Customer|undefined;
  constructor(private customerService:CustomerService) {
    this.customers=this.customerService.getAllCustomers();
  }

  DeleteCustomer(customer:Customer) {
    this.customerService.removeCustomer(customer);

  }
}

