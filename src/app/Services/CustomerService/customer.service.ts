import { Injectable } from '@angular/core';
import {Customer} from "../../Models/Customer";
import {PhoneNumberUtil} from "google-libphonenumber";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers:Array<Customer>;
  //private customerFind:Customer|any;
  constructor() {this.customers = JSON.parse(localStorage.getItem('Customers') || '[]');}
//***********************************************************
  //Check PhoneNumber For Valid Or Not:
  validatePhoneNumber(phoneNumber:string):boolean {
    const phoneUtil =PhoneNumberUtil.getInstance();
    try {
      const number = phoneUtil.parse(phoneNumber , "IR");
      return phoneUtil.isValidNumber(number);
    }
    catch (e){
      return false;
    }
  }
  //*********************************************************
  //Check Exist Customer In Local Storage And Array:
  IsExistByInfo(customer:Customer):boolean{
    for (let index = 0; index < this.customers.length; index++) {
      if (this.customers[index].firstName == customer.firstName && this.customers[index].lastName == customer.lastName &&
      this.customers[index].dateOfBirth == customer.dateOfBirth){
        return true;
      }
    }
    return false;
  }

  IsExistByEmail(customer:Customer):boolean{
    for (let index = 0; index < this.customers.length; index++) {
      if (this.customers[index].email == customer.email){
        return true;
      }
    }
    return false;
  }



//***********************************************************
  //Add Method For Added Customer Info:
  addCustomer(customer:Customer){
    //Create Id For Customer:
    customer.id = this.customers.length+1;
    //Check Customer Existing
    if (this.IsExistByInfo(customer)){
      alert("The Customer Already Exist...");
      return;
    }
    if (this.IsExistByEmail(customer)){
      alert("Email Is Already Exist...");
      return;
    }
    //check Phone Number Is Valid Or Not:
    const isValidPhoneNumber =this.validatePhoneNumber(customer.phoneNumber);
    if (!isValidPhoneNumber){
      alert("The phone number entered is not valid.");
    }
    //Add Customer In CustomerList:
    this.customers.push(customer);
    //Add Customer In Local Storage:
    localStorage.setItem('Customers' , JSON.stringify(this.customers));
    alert("Customer Registered SuccessFully.");
  }
//***********************************************************
  //Edit Method For Update Customer Info:
  editCustomer(customer:Customer , id:number){
    //Check Phone Number Is Valid:
    const isValidPhoneNumber = this.validatePhoneNumber(customer.phoneNumber);
    if (!isValidPhoneNumber){
      alert("The phone number entered is not correct.");
      return;
    }
    const isData= localStorage.getItem("Customers");
    if (isData != null){
      const localData = JSON.parse(isData);
      for (let Index = 0; Index < localData.length; Index++) {
        if (localData[Index].id == id && this.customers[Index].id == id){
            localData[Index] = customer;
            const result = this.customers.findIndex((data:any) => data.id == id);
            customer.id = this.customers[result].id;
            this.customers[result] = customer;
        }
      }
      localStorage.setItem('Customers' , JSON.stringify(localData));
      alert("Customer Update Is Success...");
    }
  }
//***********************************************************
  //Delete Customer In Local Storage And List:
  removeCustomer(customer:Customer){
    const confirmed = confirm(`Are You Sure you Want to Delete ${customer.firstName} ${customer.lastName}?`);
    if (confirmed){
      const index = this.customers.indexOf(customer);
      this.customers.splice(index , 1);
      localStorage.setItem("Customers" , JSON.stringify(this.customers));
    }
  }
  //*********************************************************
  //Get All Customer Method:
  getAllCustomers():Customer[]{
    return this.customers;
  }

  getCustomerByInformation(id:number):Customer[]{
    return this.customers.filter((data:any) => data.id == id);
  }

}
