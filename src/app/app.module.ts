import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerInfoComponent } from './Components/CustomerInfo/customer-info/customer-info.component';
import { HeaderComponent } from './Components/Shared/Header/header/header.component';
import { FooterComponent } from './Components/Shared/Footer/footer/footer.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { PageNotFoundComponent } from './Components/Errors/404/page-not-found/page-not-found.component';
import { CustomerListViewComponent } from './Components/CustomerListView/customer-list-view/customer-list-view.component';
import {
  CustomerViewInformationComponent
} from "./Components/CustomerViewInformation/customer-view-information/customer-view-information.component";
import { CustomerEditComponent } from './Components/CustomerEdit/customer-edit/customer-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerInfoComponent,
    CustomerViewInformationComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    CustomerListViewComponent,
    CustomerEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
