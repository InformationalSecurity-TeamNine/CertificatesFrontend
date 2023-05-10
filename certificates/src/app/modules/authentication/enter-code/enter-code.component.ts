import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../../unregistered-user/services/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-enter-code',
  templateUrl: './enter-code.component.html',
  styleUrls: ['./enter-code.component.css']
})
export class EnterCodeComponent {
  CodeForm = new FormGroup({
    verifyCode: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(6)])
  });
  constructor( private userService: UserService, private router: Router ) {}

  back(){
    
  }
  verify(){
    this.userService.activate(this.CodeForm.value.verifyCode).subscribe({
      next: (res) => {
        this.router.navigate(['/login']);
      },
      error: (customError: HttpErrorResponse) =>{
       alert(customError.error.split('"')[3]);
    }
    })
  }


}
