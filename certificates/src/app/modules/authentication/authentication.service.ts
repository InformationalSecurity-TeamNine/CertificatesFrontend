import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment';
import {JwtHelperService} from '@auth0/angular-jwt'
import {Token} from '../../models/Token'
import { VerifyCode } from 'src/app/models/Login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    skip:'true',
  });
  private readonly apiUrl = 'https://www.google.com/recaptcha/api/siteverify';
  private readonly siteKey = '6LemegUmAAAAAHGfsB3xSgM7okBwXo1jnoB0TF19';

  user$ = new BehaviorSubject(null);
  userState$ = this.user$.asObservable();

  constructor(private http:HttpClient) {
    this.user$.next(this.getRole());
   }
   isPasswordDurationValid(email: string): Observable<boolean> {
    return this.http.get<boolean>(environment.apiHost + 'api/user/password-expired/' + email);
  }


   login(email: string, password: string, type: string): Observable<string> {
    return this.http.post(environment.apiHost + 'api/user/login', { email, password, type }, { responseType: 'text' });
  }
  
  verifyLogin(email: string, verifyCode: VerifyCode): Observable<Token>{
    return this.http.post<Token>(environment.apiHost + 'api/user/login/' + email + "/verify", verifyCode, {
      headers:this.headers,
    });
  }

  logout(){
    localStorage.removeItem('user');
    this.setUser();

  }
  isLoggedIn(): boolean{
    return localStorage.getItem('user') != null;
  }


  getRole():any{
    if(this.isLoggedIn()){
      const accessToken: string | null = localStorage.getItem('user');
      const helper = new JwtHelperService();
      if(accessToken != null){
        const role = helper.decodeToken(accessToken).role[0].authority;
        return role;
      }
      return null;
      
    }
    return null;
  }

  setUser(): void{
    this.user$.next(this.getRole());
  }

  validateRecaptcha(recaptcha:string):Observable<boolean>{
    return this.http.post<boolean>(environment.apiHost + 'api/user/recaptcha?g-recaptcha-response='+recaptcha, {
      headers:this.headers,
    });
  }
}
