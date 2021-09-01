import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent} from './login/login.component';
import { EmployeesComponent } from './employees/employees.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NoconfigComponent } from './noconfig/noconfig.component';
import { ModalComponent } from './modal/modal.component';
import {SignupComponent} from './signup/signup.component';
import { SportsComponent } from './sports/sports.component';
const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'feedback',component:FeedbackComponent},
  {
    path:'employees',
    component:EmployeesComponent,
    children:[
      {path:'modal', component:ModalComponent,},
    ]
    
  },
  {path:'signup',component:SignupComponent},
  {path:'sports',component:SportsComponent},
 
  {path:"**",component:NoconfigComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
