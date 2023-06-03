import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Interceptor } from './modules/authentication/interceptor/interceptor';
import { LayoutModule } from './modules/layout/layout.module';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  GoogleLoginProvider
} from 'angularx-social-login';





@NgModule({
  declarations: [
    AppComponent,
    
    
    
      
  ],
  imports: [
    SocialLoginModule,
    BrowserModule,
    LayoutModule,
    AuthenticationModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [ {  provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },  {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('953493391415-5uhh22undhc4kpbtkj9favl6flolppdq.apps.googleusercontent.com')
        }
      ]
    } as SocialAuthServiceConfig,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
