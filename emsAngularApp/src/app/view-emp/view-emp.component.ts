import { Component } from '@angular/core';
import { Payment } from '../payment.model';
import { PaymentService } from '../payment.service';
import { Router } from '@angular/router'; // Import Router
@Component({
  selector: 'app-view-emp',
  standalone: false,
  
  templateUrl: './view-emp.component.html',
  styleUrl: './view-emp.component.css'
})
export class ViewEmpComponent {
  employees: Payment[] = []; // Array to hold fetched employees

  constructor(private employeeService: PaymentService,private router: Router) {}

  ngOnInit(): void {
    this.loadEmployees();
  }
  // Fetch employees from backend
  loadEmployees(): void {
    this.employeeService.getAllPayments().subscribe(
      (data) => {
        this.employees = data; // Bind data to the employees array
        console.log('Employees fetched successfully:', data);
      },
      (error) => {
        console.error('Error fetching employees:', error);
      }
    );
  }
  
    // Edit employee
  editEmployee(employeeId: number): void {
    this.router.navigate(['/edit-employee', employeeId]); // Navigate to edit page
  }

}
