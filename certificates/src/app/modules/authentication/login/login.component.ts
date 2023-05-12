import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../unregistered-user/services/user.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.minLength(4), Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    }
  );
  siteKey: string = '6LemegUmAAAAAHGfsB3xSgM7okBwXo1jnoB0TF19';
  hasError = false;

  constructor(private router:Router,
    private authenticationService: AuthenticationService){}

  login(){
    if(!this.loginForm.valid) {this.hasError = true; return;}
    else this.hasError = false;

    let email:string | null | undefined = this.loginForm.value.email;
    let password:string | null | undefined = this.loginForm.value.password;
    if(email === null || password === null || email === undefined || password == undefined)
      return;

    const token = grecaptcha.getResponse();
    this.authenticationService.validateRecaptcha(token).subscribe({
    

      next: (result) => {
        if(result === true)
          this.confirmLogin(email, password);
        else
          alert('Invalid recaptcha');

      },
      error : (error) =>{
        if(error instanceof HttpErrorResponse){
          this.hasError = true;
        }
      }

    });

  }

  private confirmLogin(email: string, password: string) {
    this.authenticationService.login(email, password).subscribe({
      next: (result) => {
        localStorage.setItem('user', JSON.stringify(result["token"]));
        this.authenticationService.setUser();
        this.router.navigate(['/']);

      },
      error: (error) => {
        if (error instanceof HttpErrorResponse) {
          this.hasError = true;
        }
      }
    });
  }
}
