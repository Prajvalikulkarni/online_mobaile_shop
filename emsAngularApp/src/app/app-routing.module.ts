import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { EmployeeformComponent } from './employeeform/employeeform.component';
import { authGuard } from './auth.guard';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
   
  { path: 'viewEmp', component: ViewEmpComponent, canActivate: [authGuard] }, // Protected Route
  { path: 'about', component: AboutusComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'insertemp', component: EmployeeformComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default Route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
