import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { RegistrationService } from '../registration.service';
import { RegistrationComponent } from '../registration/registration.component';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  onSubmit() {
    throw new Error('Method not implemented.');
  }
  
  user = new User();
  msg = '';
  userName = '';
  constructor(private service: RegistrationService, private router: Router, private authService: AuthGuard) {
 
   }
  ngOnInit(): void { }
  loginUser() {
    this.service.loginUserFromRemote(this.user).subscribe(data => {
      sessionStorage.setItem('user', data);
      this.authService.saveUserName();

      console.log("Login successful")
      this.router.navigate(['/home'])
    },
      error => {
        console.log(this.user, "exception is here")
        this.msg = " Enter Valid EmailId and Password "
      })
  }

  gotoRegister() {
    this.router.navigate(['gotoRegister'])
  }

}
