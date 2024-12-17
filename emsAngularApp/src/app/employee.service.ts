import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private api = 'http://localhost:8080'; // Spring Boot endpoint

  constructor(private http: HttpClient) { }

  saveEmployee(employeeData: any): Observable<any> {
    return this.http.post(`${this.api}/save/employee`, employeeData);
  }
  // Fetch employee by ID
  getEmployeeById(employeeId: number): Observable<any> {
    return this.http.get(`${this.api}/get/employee/${employeeId}`);
  }
  // Method to fetch employees
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.api}/get/employee`);
  }
  // Delete an employee
  deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/delete/employee/${employeeId}`);
  }
  // Update an employee
  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.api}/update/employee`, employee);
  }
  
  
}
