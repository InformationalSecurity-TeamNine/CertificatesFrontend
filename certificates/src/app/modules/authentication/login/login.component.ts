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
  type:String = "EMAIL"

  loginForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.minLength(4), Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      verifyType: new FormControl('', [Validators.required]),
    }
  );
  hasError = false;

  constructor(private router:Router,
    private authenticationService: AuthenticationService){}

  login(){
    
    if(!this.loginForm.valid) {this.hasError = true; return;}
    else this.hasError = false;
    
    let email:string | null | undefined = this.loginForm.value.email;
    let password:string | null | undefined = this.loginForm.value.password;
    let type:string | null |undefined = this.loginForm.value.verifyType;
    
    if(email === null || password === null || type === null || type === undefined || email === undefined || password == undefined)
      return;
      
    this.authenticationService.login(email, password, type).subscribe({
      next: (result) => {
        
        this.router.navigate(['/login-verify/' + email]);

      },
      error : (error) =>{
        console.log(error)
        if(error instanceof HttpErrorResponse){
          this.hasError = true;
        }
      }

    });

  }
}
