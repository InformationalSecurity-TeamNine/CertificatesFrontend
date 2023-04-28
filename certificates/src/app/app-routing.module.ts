import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from "./modules/authentication/guard/login.guard";
import { LoginComponent } from "./modules/authentication/login/login.component";
import { RegistrationComponent } from "./modules/authentication/registration/registration.component";
import { CertificateDisplayComponent } from "./modules/layout/certificate-display/certificate-display.component";
import { CertificateRequestsDisplayComponent } from "./modules/layout/certificate-requests-display/certificate-requests-display.component";
import { CertificateWithdrawDisplayComponent } from "./modules/layout/certificate-withdraw-display/certificate-withdraw-display.component";
import { CreateCertificateComponent } from "./modules/layout/create-certificate/create-certificate.component";
import { HomeComponent } from "./modules/layout/home/home.component";
import { ValidityComponent } from "./modules/layout/validity/validity.component";
import { EnterCodeComponent } from "./modules/authentication/enter-code/enter-code.component";
import { ResetPasswordComponent } from "./modules/layout/reset-password/reset-password.component";
import { SendResetCodeComponent } from "./modules/layout/send-reset-code/send-reset-code.component";
import { VerifyLoginComponent } from "./modules/authentication/verify-login/verify-login.component";

const routes: Routes = [
  {path:'login', component:LoginComponent,
  canActivate: [LoginGuard],
  loadChildren: () =>
    import('../app/modules/authentication/authentication.module').then((m) => m.AuthenticationModule),},
    {path:'register', component:RegistrationComponent},
    {path:'verify', component:EnterCodeComponent},
    {path:'home', component:HomeComponent},
    {path:'reset-password/:email', component:ResetPasswordComponent},
    {path:'send-reset-code', component:SendResetCodeComponent},
    {path:'certificates', component:CertificateDisplayComponent},
    {path:'certificate-requests', component:CertificateRequestsDisplayComponent},
    {path:'certificate-validity', component:ValidityComponent},
    {path:'certificate-create', component:CreateCertificateComponent},
    {path:'certificate-withdrawn', component:CertificateWithdrawDisplayComponent},
    {path:'login-verify/:email', component:VerifyLoginComponent},
    {path:'', redirectTo: '/home', pathMatch:'full'},
    {path:'**', component:HomeComponent}

  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  