import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../unregistered-user/services/user.service';
import { PasswordReset, ResetType } from 'src/app/models/Users';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  Type:string;
  passwordReset: PasswordReset;
  resetType: ResetType;
  CodeForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    verifyCode: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(6)]),
    password: new FormControl('', [Validators.required, Validators.minLength(10)]),
    repeatedPassword: new FormControl('', [Validators.required, Validators.minLength(10)])

  });
  constructor( private userService: UserService ) {}
  
  sendResetCode(){
  
    
    
  }
  reset(){
    this.passwordReset.code = this.CodeForm.value.verifyCode
    this.passwordReset.password = this.CodeForm.value.password
    this.passwordReset.repeatPassword = this.CodeForm.value.repeatedPassword
    this.userService.reset(this.CodeForm.value.email, this.passwordReset).subscribe({
      next: (res) => {
        
      }
    })
  }
}
