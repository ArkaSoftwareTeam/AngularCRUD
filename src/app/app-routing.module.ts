import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Components/Home/home/home.component";
import {CustomerInfoComponent} from "./Components/CustomerInfo/customer-info/customer-info.component";
import {PageNotFoundComponent} from "./Components/Errors/404/page-not-found/page-not-found.component";
import {
  CustomerViewInformationComponent
} from "./Components/CustomerViewInformation/customer-view-information/customer-view-information.component";
import {CustomerListViewComponent} from "./Components/CustomerListView/customer-list-view/customer-list-view.component";
import {CustomerEditComponent} from "./Components/CustomerEdit/customer-edit/customer-edit.component";

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'addCustomer' , component:CustomerInfoComponent},
  {path:'viewCustomerInfo/:id/:name' , component:CustomerViewInformationComponent},
  {path:'ViewCustomerList' , component:CustomerListViewComponent},
  {path:'customerEdit/:id/:name' , component:CustomerEditComponent},
  {path:'**' , component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
