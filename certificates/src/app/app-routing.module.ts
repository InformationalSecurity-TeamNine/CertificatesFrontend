import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from "./modules/authentication/guard/login.guard";
import { LoginComponent } from "./modules/authentication/login/login.component";
import { RegistrationComponent } from "./modules/authentication/registration/registration.component";
import { HomeComponent } from "./modules/layout/home/home.component";

const routes: Routes = [
  {path:'login', component:LoginComponent,
  canActivate: [LoginGuard],
  loadChildren: () =>
    import('../app/modules/authentication/authentication.module').then((m) => m.AuthenticationModule),},
    {path:'register', component:RegistrationComponent},
    {path:'home', component:HomeComponent},
    {path:'', redirectTo: '/home', pathMatch:'full'},
    {path:'**', component:HomeComponent}

  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  