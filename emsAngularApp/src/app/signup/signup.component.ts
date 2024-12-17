import { Component } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-signup',
  standalone: false,
  
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
   showPaymentForm = false; // Toggles visibility of payment form

  payment = {
    
    cardNumber: '',
    expiry: '',
    cvv: ''
  };
  constructor(private paymentService: PaymentService) {}
  onBuyNow() {
    this.showPaymentForm = true; // Show payment form
  }

  submitPayment() {
    console.log('Submitting Payment:', this.payment);
    this.paymentService.createPayment(this.payment).subscribe({
      next: (response) => {
        console.log('Payment Response:', response);
        alert('Payment Successful:\n' + JSON.stringify(response));
        this.resetForm();
      },
      error: (error) => {
        console.error('Payment Error:', error);
        alert('Payment failed. See console for details.');
      },
    });
  }
  
    

  

  resetForm() {
    this.showPaymentForm = false;
    this.payment = { cardNumber: '', expiry: '', cvv: '' };
  }

}




