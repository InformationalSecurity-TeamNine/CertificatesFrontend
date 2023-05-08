import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent {


  constructor(private router: Router, private authenticationService: AuthenticationService){

  }
  logout(){
    localStorage.removeItem('user');
    this.authenticationService.setUser();

    this.router.navigate(['/home']);
  }
}
