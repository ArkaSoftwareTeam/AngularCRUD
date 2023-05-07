import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import {ActivatedRoute, Router} from "@angular/router";
import {PhoneNumberUtil} from "google-libphonenumber";
import {Customer} from "../../../Models/Customer";
import {CustomerService} from "../../../Services/CustomerService/customer.service";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit{
  customerId:number|any;
  CustomerEditForm:FormGroup|any;
  phoneNumberUtil =PhoneNumberUtil.getInstance();
  customer:Customer|any;

  constructor(private route:ActivatedRoute , private formBuilder:FormBuilder ,
              private router:Router , private customerService:CustomerService) {}



  ngOnInit(): void {
    this.customerId = this.route.snapshot.params["id"];
    this.customer = this.customerService.getCustomerByInformation(this.customerId);
    for (let i = 0; i < this.customer.length; i++) {
      this.CustomerEditForm = this.formBuilder.group({
        firstName:[this.customer[i].firstName , [Validators.required , Validators.minLength(2) , Validators.maxLength(30)]],
        lastName:[this.customer[i].lastName , [Validators.required , Validators.minLength(2) , Validators.maxLength(30)]],
        dateOfBirth:[this.customer[i].dateOfBirth , Validators.required],
        phoneNumber:[this.customer[i].phoneNumber , [Validators.required , Validators.minLength(11) , Validators.pattern("(0|\\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}")]],
        email:[this.customer[i].email , Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')],
        bankAccountNumber:[this.customer[i].bankAccountNumber , [Validators.pattern("")]]
      })
    }
  }


  OnUpdate(){
    this.customer = {...this.CustomerEditForm.value};
    this.customerService.editCustomer(this.customer , this.customerId);
  }


}
