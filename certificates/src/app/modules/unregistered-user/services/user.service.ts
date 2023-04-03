import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisteredUser, User } from 'src/app/models/Users';
import { environment } from 'src/app/environment/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(user: User) : Observable<RegisteredUser> {
    return this.http.post<RegisteredUser>(environment.apiHost + "api/user/register", user)
  }

}
