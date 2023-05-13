import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { EnterCodeComponent } from './enter-code/enter-code.component';
import { VerifyLoginComponent } from './verify-login/verify-login.component';
import { NgxCaptchaModule } from 'ngx-captcha';




@NgModule({
  declarations: [LoginComponent, RegistrationComponent, EnterCodeComponent, VerifyLoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    NgxCaptchaModule
  ],
  exports:[LoginComponent, RegistrationComponent, EnterCodeComponent, VerifyLoginComponent]
})
export class AuthenticationModule { }
