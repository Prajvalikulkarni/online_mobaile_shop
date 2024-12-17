import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], 
})
export class HomeComponent {
  // Product list
  products = [
    { name: 'iPhone 13', description: 'Latest Apple iPhone', price: '999' },
    { name: 'Samsung Galaxy S21', description: 'Flagship Samsung Smartphone', price: '799' },
    { name: 'Google Pixel 6', description: 'Google\'s latest phone', price: '599' }
  ];

  constructor(private router: Router) {}

  // Correct method name: onBuyNow
  onBuyNow() {
    console.log('Buy Now Clicked');
    this.router.navigate(['/signup']);
  }
}
