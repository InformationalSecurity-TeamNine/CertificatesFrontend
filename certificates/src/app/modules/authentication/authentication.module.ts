import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { EnterCodeComponent } from './enter-code/enter-code.component';




@NgModule({
  declarations: [LoginComponent, RegistrationComponent, EnterCodeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
  ],
  exports:[LoginComponent, RegistrationComponent, EnterCodeComponent]
})
export class AuthenticationModule { }
