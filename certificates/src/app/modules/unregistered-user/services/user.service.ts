import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PasswordReset, RegisteredUser, ResetType, User } from 'src/app/models/Users';
import { environment } from 'src/app/environment/environment';
import { Observable } from 'rxjs';
import { VerifyCode } from 'src/app/models/Login';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(user: User) : Observable<RegisteredUser> {
    return this.http.post<RegisteredUser>(environment.apiHost + "api/user/register", user)
  }
  activate(activateCode: string): Observable<string>{
    return this.http.put(environment.apiHost + "api/user/activate/" + activateCode, HttpRequest, { responseType: 'text' })
  }
  
  sendResetCode(email: string, resetType: ResetType): Observable<any>{
    return this.http.post<any>(environment.apiHost + "api/user/"+ email + "/resetPassword/", resetType)
  }
  reset(email: string, resetPassword: PasswordReset): Observable<any>{
    return this.http.put<any>(environment.apiHost + "api/user/"+ email + "/resetPassword/", resetPassword)
  }

  


}
