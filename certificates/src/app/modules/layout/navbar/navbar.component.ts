import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{


  ngOnInit(): void {
    console.log('da');
  }

}
