import {throttleTime} from "rxjs";

export class Customer{
  id:number = 0;
  firstName:string;
  lastName:string;
  dateOfBirth:string;
  phoneNumber:string;
  email:string;
  bankAccountNumber:number;

  constructor(
     FName:string , LName:string , DateOfBirth:string  ,PhoneNumber:string  ,Email:string , AccountNumber:number
  ) {

    this.firstName = FName;
    this.lastName = LName;
    this.dateOfBirth = DateOfBirth;
    this.phoneNumber = PhoneNumber;
    this.email = Email;
    this.bankAccountNumber = AccountNumber;


  }
}
