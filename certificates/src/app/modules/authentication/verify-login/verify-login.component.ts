import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../unregistered-user/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { VerifyCode } from 'src/app/models/Login';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-verify-login',
  templateUrl: './verify-login.component.html',
  styleUrls: ['./verify-login.component.css']
})
export class VerifyLoginComponent {
  CodeForm = new FormGroup({
    verifyCode: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(6)])
  });
  constructor(private router:Router, private  route: ActivatedRoute,
    private authenticationService: AuthenticationService) {}

  back(){
    
  }
  verify(){
    this.route.params.subscribe((params) => {
      let email:string = params['email'];
      let code:VerifyCode = {
        code: this.CodeForm.value.verifyCode
      }
    this.authenticationService.verifyLogin(email, code).subscribe({
      next: (result) => {
        
        localStorage.setItem('user', JSON.stringify(result["token"]));
        this.authenticationService.setUser();
        this.router.navigate(['/']);
        
      },
      error: (customError: HttpErrorResponse) =>{
        alert(customError.error.message);
    }
      
    })
  });
}
}

