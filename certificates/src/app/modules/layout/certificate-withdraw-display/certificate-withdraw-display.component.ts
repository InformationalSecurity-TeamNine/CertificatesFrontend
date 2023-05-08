import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WithdrawnCertificate } from 'src/app/models/Certificates';
import { AuthenticationService } from '../../authentication/authentication.service';
import { CertificateService } from '../certificate.service';

@Component({
  selector: 'app-certificate-withdraw-display',
  templateUrl: './certificate-withdraw-display.component.html',
  styleUrls: ['./certificate-withdraw-display.component.css']
})
export class CertificateWithdrawDisplayComponent {

  hasError: boolean = false;
  errorMessage: string = '';
  withdrawnCertificates: WithdrawnCertificate[];
  withdrawnValue: boolean = false;

  certificateForm = new FormGroup(
    {
      id: new FormControl('', [Validators.required]),
      reason: new FormControl('', [Validators.required, Validators.minLength(2)]),
      
    }
  );

  ngOnInit(): void {
      this.getWithdrawn();
      this.certificateService.certificateWithdrawnValue$.subscribe(
        (result) =>{
          this.getWithdrawn();
          this.withdrawnValue = !result;
        }
      );
      this.certificateService.selectedCertificateValue$.subscribe(
        (value) =>{
          if(value !== null && value !== undefined){
            this.certificateForm.controls['id'].setValue(String(value.id));
          }
        }
      )

  }

  constructor(private authenticationService: AuthenticationService, private certificateService: CertificateService){

  }
  private getWithdrawn() {
    this.certificateService.getAllWithdrawn().subscribe(
      {
        next: (result) => {
          this.withdrawnCertificates = result;
        },
        error: (myError: HttpErrorResponse) => {
          console.log(myError);
        }
      });
  }

  withdraw(): void{
      this.hasError = false;
      if(!this.certificateForm.valid){
        alert('Please fulfill every field.')
        return;
      }
      if(this.certificateForm.value.reason.trim() === '') {alert('Please enter a reason.');return;}
     
      this.certificateService.withdraw(Number(this.certificateForm.value.id), this.certificateForm.value.reason).subscribe({
        next:(result) =>{
            alert('Successfully withdrawn a certificate');
            this.certificateForm.reset();
            this.certificateService.setCertificateCreated(true);
            this.certificateService.setCertificateWithdrawn(this.withdrawnValue);
            
        },
        error: (customError: HttpErrorResponse) =>{
            this.hasError = true;
            this.errorMessage = customError.error.message;
        }
      });
  }
}
