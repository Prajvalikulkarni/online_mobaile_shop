import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-registration',
  standalone: false,
  
  templateUrl: './employee-registration.component.html',
  styleUrl: './employee-registration.component.css'
})
export class EmployeeRegistrationComponent {

  employee = {
    employeeName: '',
    emailId: '',
    employeePassword: '',
    employeeContactNumber: '',
    employeeAddress: '',
    employeeGender: '',
    employeeSkills: ''
  };

  constructor(private http: HttpClient) {}



onSubmit() {
  console.log('Form Submitted:', this.employee); // Debugging line
  this.http.post('http://localhost:8080/save/employee', this.employee).subscribe(
    (response) => {
      alert('Employee registered successfully!');
      console.log(response);
    },
    (error) => {
      alert('Error occurred while saving employee details.');
      console.error(error);
    }
  );
}
}