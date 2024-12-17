import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { CanActivateFn } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.getLoginStatus()) {
      return true; // Allow access to the route
    } else {
      this.router.navigate(['/login']); // Redirect to login page
      return false; // Deny access to the route
    }
  }
}


export const authGuard: CanActivateFn = (route, state) => {
  // Add your authentication logic here
  console.log('AuthGuard activated');
  return true; // Allow access
};
