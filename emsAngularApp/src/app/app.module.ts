import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi ,withFetch} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes  } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HeaderComponent } from './header/header.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';




const routes: Routes = [
  { path: '', component: ViewEmpComponent }, // Default route to view employees
  { path: 'edit-employee/:id', component: EditEmpComponent }, // Route to edit an employee
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeRegistrationComponent,
    EmployeelistComponent,
    HomeComponent,
    AboutusComponent,
    HeaderComponent,
    ViewEmpComponent,
    ContactComponent,
    SignupComponent,
    EmployeeformComponent,
    EditEmpComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes), // Import the routes
    RouterModule.forRoot([]),
  ],
  providers: [
    // Use provideHttpClient to configure HTTP client and interceptors
    provideHttpClient(withInterceptorsFromDi(),withFetch()), // Updated method
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
