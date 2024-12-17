import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from './payment.model';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = 'http://localhost:8080/api/payments'; // Backend API URL

  constructor(private http: HttpClient) {}

  createPayment(payment: any): Observable<any> {
    return this.http.post<Payment>(this.apiUrl, payment);
  }

  getAllPayments(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.apiUrl);
  }
}


