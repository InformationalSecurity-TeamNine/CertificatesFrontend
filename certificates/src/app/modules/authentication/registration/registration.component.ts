import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../unregistered-user/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/Users';



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
    repeatedPassword: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  constructor( private userService: UserService, private router: Router){

  }

  get password() { return this.registerForm.get('password'); }
  get repeatedPassword() { return this.registerForm.get('repeatedPassword'); }

  register():void{
    if (this.password.value !== this.repeatedPassword.value) {
      alert("Passwords don't match");
      return;
    }
    console.log(this.registerForm)
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

      this.userService.register(user).subscribe(
        {
          next: (result) => {
            alert('Successfully registered')
             
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
}
