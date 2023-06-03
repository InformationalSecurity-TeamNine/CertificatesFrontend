import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication/authentication.service';
import { TokenDecoderService } from '../../authentication/token/token-decoder.service';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css']
})
export class MyInfoComponent implements OnInit{

  email: string = '';
  role: string = '';
  isLogedIn = false;
  ngOnInit(): void {
    
    this.authService.user$.subscribe((result) =>{
      if(result !== null && result !== undefined){
        this.isLogedIn = true;
        const user = this.jwtDecoder.getDecodedAccesToken();
        this.email = user['sub'];
        this.role = user['role'][0]['authority'];
      }
      else
      this.isLogedIn = false;
    })
  }
  constructor(private jwtDecoder: TokenDecoderService, private authService: AuthenticationService){

  }

}
