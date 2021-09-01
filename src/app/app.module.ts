import { NgModule } from '@angular/core';
import { RouterModule ,Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NoconfigComponent } from './noconfig/noconfig.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { EmployeesComponent } from './employees/employees.component';
import { SignupComponent } from './signup/signup.component';
import { ModalComponent } from './modal/modal.component';
import { SportsComponent } from './sports/sports.component';
import {DataTablesModule} from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NoconfigComponent,
    FeedbackComponent,
    EmployeesComponent,
    SignupComponent,
    ModalComponent,
    SportsComponent,
 ],
  imports: [
    BrowserModule,
    ReactiveFormsModule ,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
   
    RouterModule.forRoot([{ path: '', component: AppComponent},]),
    DataTablesModule,
    HttpClientModule
    
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


