import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from "./modules/authentication/guard/login.guard";
import { LoginComponent } from "./modules/authentication/login/login.component";
import { RegistrationComponent } from "./modules/authentication/registration/registration.component";
import { CertificateDisplayComponent } from "./modules/layout/certificate-display/certificate-display.component";
import { CertificateRequestsDisplayComponent } from "./modules/layout/certificate-requests-display/certificate-requests-display.component";
import { HomeComponent } from "./modules/layout/home/home.component";

const routes: Routes = [
  {path:'login', component:LoginComponent,
  canActivate: [LoginGuard],
  loadChildren: () =>
    import('../app/modules/authentication/authentication.module').then((m) => m.AuthenticationModule),},
    {path:'register', component:RegistrationComponent},
    {path:'home', component:HomeComponent},
    {path:'certificates', component:CertificateDisplayComponent},
    {path:'certificate-requests', component:CertificateRequestsDisplayComponent},
    {path:'', redirectTo: '/home', pathMatch:'full'},
    {path:'**', component:HomeComponent}

  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  