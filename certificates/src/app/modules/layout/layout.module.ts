import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from 'src/app/modules/layout/navbar/navbar.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    NavbarComponent
  ]
})
export class LayoutModule { }
