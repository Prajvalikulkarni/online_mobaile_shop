import { Component } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employeeform',
  standalone: false,
  
  templateUrl: './employeeform.component.html',
  styleUrl: './employeeform.component.css'
})
export class EmployeeformComponent {
  employee: Employee = {
    employeeId: 0,
    employeeName: '',
    emailId: '',
    employeePassword: '',
    employeeContactNumber: '',
    employeeAddress: '',
    employeeGender: '',
    employeeSkills: '',
  };


  constructor(private employeeService: EmployeeService) { }


  // Method to handle form submission
    onSubmit(form: NgForm) {
    if (form.valid) {
      this.employeeService.saveEmployee(this.employee).subscribe(
        (response) => {
          // console.log('Employee saved successfully:', response);
              // Display a success popup
          Swal.fire({
            title: 'Success!',
            text: 'Employee saved successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
          });
          form.reset();
        },
        (error) => {
          // console.error('Error saving employee:', error);
                    // Display an error popup
                    Swal.fire({
                      title: 'Error!',
                      text: 'There was a problem saving the employee. Please try again later.',
                      icon: 'error',
                      confirmButtonText: 'OK'
                    });
          
        }
      );
    }
  }

}
