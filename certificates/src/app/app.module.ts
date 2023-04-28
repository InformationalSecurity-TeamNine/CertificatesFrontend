import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Interceptor } from './modules/authentication/interceptor/interceptor';
import { LayoutModule } from './modules/layout/layout.module';





@NgModule({
  declarations: [
    AppComponent,
    
    
    
      
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AuthenticationModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [ {  provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
