import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from 'src/app/modules/layout/navbar/navbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    HomeNavbarComponent,
    UserNavbarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    HomeComponent,
    NavbarComponent
  ]
})
export class LayoutModule { }
