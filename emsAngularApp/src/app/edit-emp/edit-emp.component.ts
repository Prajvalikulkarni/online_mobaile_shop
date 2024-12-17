import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-emp',
  standalone: false,
  
  templateUrl: './edit-emp.component.html',
  styleUrl: './edit-emp.component.css'
})
export class EditEmpComponent implements OnInit {
  employeeId!: number;
  employee: Employee = {
    employeeId: 0,
    employeeName: '',
    emailId: '',
    employeeContactNumber: '',
    employeeAddress: '',
    employeeGender: '',
    employeeSkills: '',
    employeePassword: '' // Add other fields as required
  };

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get the employee ID from the route
    this.employeeId = +this.route.snapshot.paramMap.get('id')!;
    this.loadEmployeeDetails();
  }

  // Fetch employee details by ID
  loadEmployeeDetails(): void {
    this.employeeService.getEmployeeById(this.employeeId).subscribe(
      (data) => {
        this.employee = data;
      },
      (error) => {
        console.error('Error fetching employee:', error);
      }
    );
  }

  // Save updated employee data
  saveChanges(): void {
    this.employeeService.updateEmployee(this.employee).subscribe(
      () => {
        alert('Employee updated successfully!');
        this.router.navigate(['/viewEmp']); // Navigate back to the list view
      },
      (error) => {
        console.error('Error updating employee:', error);
      }
    );
  }
  goBack(): void {
    this.router.navigate(['/']); // Navigate to the employee list
  }

}
