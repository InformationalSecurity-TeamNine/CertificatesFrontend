import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../unregistered-user/services/user.service';
import { AuthenticationService } from '../authentication.service';
import { ReCaptcha2Component, ReCaptchaV3Service } from 'ngx-captcha';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  type:String = "EMAIL"
  sitekey:string = "6LemegUmAAAAAHGfsB3xSgM7okBwXo1jnoB0TF19";

  loginForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.minLength(4), Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      verifyType: new FormControl('', [Validators.required]),
      recaptcha: new FormControl('', [Validators.required])
    }
  );
  hasError = false;

  constructor(private router:Router,
    private authenticationService: AuthenticationService, private recaptchaV3Service: ReCaptchaV3Service){}

  login(){
    if(!this.loginForm.valid) {this.hasError = true; return;}
    else this.hasError = false;
    
    let email:string | null | undefined = this.loginForm.value.email;
    let password:string | null | undefined = this.loginForm.value.password;
    let type:string | null |undefined = this.loginForm.value.verifyType;
    
    if(email === null || password === null || type === null || type === undefined || email === undefined || password == undefined)
      return;
    
      const token = this.loginForm.value.recaptcha;
      
      //const token = grecaptcha.getResponse();
     
      this.authenticationService.validateRecaptcha(token).subscribe({
        next: (result) => {
          if(result === true){
            this.validatePassword(email, password, type);

          }
        else
          alert('Invalid recaptcha');

      },
      error : (error) =>{
        if(error instanceof HttpErrorResponse){
          alert('Invalid recaptcha. Try again.');
          this.hasError = true;
        }
      }
    });

  }


  private validatePassword(email: string, password: string, type: string) {
    this.authenticationService.isPasswordDurationValid(email).subscribe({
      next: (res) => {
        if (res === true)
          this.validateLogin(email, password, type);
        else
          this.router.navigate(['/send-reset-code']);

      },
      error: (error) => {
        if (error instanceof HttpErrorResponse) {
          alert(error.error.message);
          this.hasError = true;
        }
      }
    });
  }

  private validateLogin(email: string, password: string, type: string) {
    this.authenticationService.login(email, password, type).subscribe({
      next: (result) => {

        this.router.navigate(['/login-verify/' + email]);

      },
      error: (error) => {
        console.log(error);
        if (error instanceof HttpErrorResponse) {
          this.hasError = true;
        }
      }
    });
  }
}
