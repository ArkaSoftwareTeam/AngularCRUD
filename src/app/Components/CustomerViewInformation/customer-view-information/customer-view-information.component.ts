import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PhoneNumberUtil} from "google-libphonenumber";
import {Customer} from "../../../Models/Customer";
import {CustomerService} from "../../../Services/CustomerService/customer.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-customer-view-information',
  templateUrl: './customer-view-information.component.html',
  styleUrls: ['./customer-view-information.component.css']
})
export class CustomerViewInformationComponent implements OnInit{

  CustomerId:number|any;
  phoneNumberUtil =PhoneNumberUtil.getInstance();
  customer:Customer|any;

  @Input() CustomerViewInfoInput:Customer|undefined;
  constructor(private route:ActivatedRoute,
              private customerService:CustomerService , private router:Router) {}


  ngOnInit() {
    this.CustomerId = this.route.snapshot.params['id'];
    this.customer = this.customerService.getCustomerByInformation(this.CustomerId);
    this.customer = this.customer[0];
  }

  goToCustomerListView():void{
    this.router.navigate(["/ViewCustomerList"])
  }


  goToCustomerAdd():void{
    this.router.navigate(["/addCustomer"])
  }

}
