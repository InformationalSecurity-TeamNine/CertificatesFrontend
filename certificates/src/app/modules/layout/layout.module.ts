import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from 'src/app/modules/layout/navbar/navbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { CertificateDisplayComponent } from './certificate-display/certificate-display.component';
import { CertificateRequestsDisplayComponent } from './certificate-requests-display/certificate-requests-display.component';
import { ValidityComponent } from './validity/validity.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateCertificateComponent } from './create-certificate/create-certificate.component';
import { CertificateWithdrawDisplayComponent } from './certificate-withdraw-display/certificate-withdraw-display.component';
import { MyInfoComponent } from './my-info/my-info.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    HomeNavbarComponent,
    UserNavbarComponent,
    CertificateDisplayComponent,
    CertificateRequestsDisplayComponent,
    ValidityComponent,
    CreateCertificateComponent,
    CertificateWithdrawDisplayComponent,
    MyInfoComponent,
    ResetPasswordComponent
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    HomeComponent,
    NavbarComponent,
    CertificateDisplayComponent,
    CertificateRequestsDisplayComponent,
    ValidityComponent,
    CreateCertificateComponent,
    CertificateWithdrawDisplayComponent,
    MyInfoComponent,
    ResetPasswordComponent
    
  ]
})
export class LayoutModule { }
