import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../../../Models/Customer";
import {CustomerService} from "../../../Services/CustomerService/customer.service";
@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent  implements OnInit{
  customerForm:FormGroup|any;
  customer:Customer[]|any;
  constructor(private formBuilder:FormBuilder , private customerService:CustomerService) {
  }
  ngOnInit(): void {
      this.customerForm = this.formBuilder.group({
      firstName:['' , [Validators.required , Validators.minLength(2) , Validators.maxLength(30)]],
      lastName:['' , [Validators.required , Validators.minLength(2) , Validators.maxLength(30)]],
      dateOfBirth:['' , Validators.required],
      phoneNumber:['' , [Validators.required , Validators.minLength(11) , Validators.pattern("(0|\\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}")]],
      email:['' , Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')],
      bankAccountNumber:['' , [Validators.pattern("")]]
    })
  }


  onSubmitAdd(){
   // debugger
    this.customer =this.customerForm.value;
    this.customerService.addCustomer(this.customer);
    console.log(this.customer);
  }


}
