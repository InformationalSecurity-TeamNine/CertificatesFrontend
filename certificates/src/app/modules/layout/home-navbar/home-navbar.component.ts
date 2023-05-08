import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.css']
})
export class HomeNavbarComponent implements OnInit{
  constructor(private router: Router, private authenticationService: AuthenticationService){

  }
  ngOnInit(): void {
    if(!this.authenticationService.isLoggedIn()) this.router.navigate(['/login']);
  }
}
