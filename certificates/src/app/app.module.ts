import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { RegistrationComponent } from './modules/authentication/registration/registration.component';
import { LayoutModule } from './modules/layout/layout.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './modules/authentication/interceptor/interceptor';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AuthenticationModule,
    AppRoutingModule
  ],
  providers: [ {  provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
