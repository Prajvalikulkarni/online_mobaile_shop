import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


loginObj: any = {
username:'',
password:''
};

constructor(private router: Router) {}

// router = inject(Router);

onLogin() {
if(this.loginObj.username == "root" && this.loginObj.password =="1234") {
this.router.navigateByUrl('home')

  this.router.navigate(['/viewEmp']); // Navigate to View Product after login
} else {
alert("Wrong Credentials")
}
}
}

