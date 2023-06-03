import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../unregistered-user/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetType } from 'src/app/models/Users';

@Component({
  selector: 'app-send-reset-code',
  templateUrl: './send-reset-code.component.html',
  styleUrls: ['./send-reset-code.component.css']
})
export class SendResetCodeComponent {
  Type="EMAIL";
  resetType:ResetType ={
    verifyType: ""
  }
  CodeForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(5)]),
    verifyType: new FormControl('', [Validators.required]),

  });
  constructor( private router: Router, private userService: UserService,private route: ActivatedRoute ) {}
send(){
  if (!this.CodeForm.valid){alert('Please enter valid email.');return;}
  this.resetType.verifyType = this.CodeForm.value.verifyType;
  this.userService.sendResetCode( this.CodeForm.value.email, this.resetType)
          .subscribe({
            next:(result) =>{
              this.router.navigate(['/reset-password/' + this.CodeForm.value.email]);

            },
            error:(error) =>{
              this.router.navigate(['/reset-password/' + this.CodeForm.value.email]);

            }
          }
            
          );

}
}
