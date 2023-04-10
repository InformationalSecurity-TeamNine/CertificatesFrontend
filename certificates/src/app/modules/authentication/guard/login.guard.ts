import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard {

  constructor(private authenticationService: AuthenticationService, 
              private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> 
    | Promise<boolean | UrlTree> 
    | boolean | UrlTree {
      if(this.authenticationService.isLoggedIn()){
        this.router.navigate(['home']);
        return false;
      }
    return true;
  }
  
}
