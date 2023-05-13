import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../unregistered-user/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/Users';
import { AuthenticationService } from '../authentication.service';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  Type = 'EMAIL';
  registerForm = new FormGroup({
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(14)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    surname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(10)]),
    verifyType: new FormControl('', [Validators.required]),
    repeatedPassword: new FormControl('', [Validators.required, Validators.minLength(10)]),
    recaptcha: new FormControl('', [Validators.required])
  });
  sitekey:string = "6LemegUmAAAAAHGfsB3xSgM7okBwXo1jnoB0TF19";

  constructor( private userService: UserService, private router: Router, private authenticationService: AuthenticationService){

  }

  get password() { return this.registerForm.get('password'); }
  get repeatedPassword() { return this.registerForm.get('repeatedPassword'); }

  register():void{
    if (this.password.value !== this.repeatedPassword.value) {
      alert("Passwords don't match");
      return;
    }
    if(this.registerForm.value.recaptcha == ''){alert('Please fill recaptha.');return;}
     if(this.registerForm.valid){
      const user: User = {
        name : this.registerForm.value.name,
        surname : this.registerForm.value.surname,
        telephoneNumber : this.registerForm.value.phoneNumber,
        email : this.registerForm.value.email,
        verifyType: this.registerForm.value.verifyType,
        password : this.registerForm.value.password,
        repeatPassword: this.registerForm.value.repeatedPassword
      };
      
      const token = this.registerForm.value.recaptcha;

      this.authenticationService.validateRecaptcha(token).subscribe({
        next: (result) => {
          if(result === true)
          this.validateRegister(user);
        
        else
          alert('Invalid recaptcha');

      },
      error : (error) =>{
        if(error instanceof HttpErrorResponse){
          alert('Invalid recaptcha. Try again.');
        }
      }
    });

    }
  }

  private validateRegister(user: User) {
    this.userService.register(user).subscribe(
      {
        next: (result) => {
          alert('Successfully registered');

          console.log(result);
        },
        error: (error) => {
          alert(error);
          console.log(error);
        }
      }
    );
  }
}
