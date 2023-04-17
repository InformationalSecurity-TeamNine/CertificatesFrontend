import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../unregistered-user/services/user.service';
import { ActivatedRoute } from '@angular/router';
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
    email: new FormControl('', [Validators.required, Validators.email]),
    verifyType: new FormControl('', [Validators.required]),

  });
  constructor( private userService: UserService,private route: ActivatedRoute ) {}
send(){
  console.log(this.CodeForm.value.verifyType);
  this.resetType.verifyType = this.CodeForm.value.verifyType;
  this.userService.sendResetCode( this.CodeForm.value.email, this.resetType)
          .subscribe(
            (res) => {
              
            }
          );

}
}
