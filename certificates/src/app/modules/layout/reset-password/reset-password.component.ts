import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../unregistered-user/services/user.service';
import { PasswordReset, ResetType } from 'src/app/models/Users';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  Type:string;
  passwordReset: PasswordReset = {
    code: "",
    password: "",
    repeatPassword: ""
  }

  CodeForm = new FormGroup({
    verifyCode: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(6)]),
    password: new FormControl('', [Validators.required, Validators.minLength(10)]),
    repeatedPassword: new FormControl('', [Validators.required, Validators.minLength(10)])

  });
  constructor( private userService: UserService,private router:Router, private route: ActivatedRoute ) {}
  
  
  reset(){
    this.passwordReset.code = this.CodeForm.value.verifyCode
    this.passwordReset.password = this.CodeForm.value.password
    this.passwordReset.repeatPassword = this.CodeForm.value.repeatedPassword
    this.route.params.subscribe((params) => {
      let email:string = params['email'];
    this.userService.reset(email, this.passwordReset).subscribe({
      next: (res) => {
        alert("Succesfully reseted password!")
        this.router.navigate(['/login']);
      },
      error: (customError: HttpErrorResponse) =>{
        
        alert(customError.error.split('"')[3]);
    }
    })
  });
}
}
