import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false; // User login status

  // Call this method when the user logs in
  login() {
    this.isLoggedIn = true;
  }

  // Call this method when the user logs out
  logout() {
    this.isLoggedIn = false;
  }

  // Check if the user is logged in
  getLoginStatus(): boolean {
    return this.isLoggedIn;
  }
}
