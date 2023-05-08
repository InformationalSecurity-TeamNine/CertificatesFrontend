import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { TokenDecoderService } from '../../authentication/token/token-decoder.service';
import { AuthenticationService } from '../../authentication/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  role:string = '';

  constructor(private authenticationService: AuthenticationService, private router: Router){

  }
  logout(): void{

    localStorage.removeItem('user');

    this.authenticationService.setUser();
    this.router.navigate(['/login']);

  }
  ngOnInit(): void {
    this.authenticationService.userState$.subscribe((result) => {
      this.role = result;
    });
  }

}
