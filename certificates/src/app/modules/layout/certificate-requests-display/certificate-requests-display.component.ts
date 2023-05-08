import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Certificate, PastRequests } from 'src/app/models/Certificates';
import { CertificateService } from '../certificate.service';

@Component({
  selector: 'app-certificate-requests-display',
  templateUrl: './certificate-requests-display.component.html',
  styleUrls: ['./certificate-requests-display.component.css']
})
export class CertificateRequestsDisplayComponent implements OnInit{

  certificates: PastRequests[];
  hasLoaded: boolean = false;
  hasError: boolean = false;
  option = '';
  errorMessage: string = '';
  showDeclineReason = false;

  requestForm = new FormGroup(
    {
      id: new FormControl('', [Validators.required]),
      reason: new FormControl('', [Validators.minLength(2)])
      
    }
  );
  constructor(private certificateService: CertificateService){


  }
  ngOnInit(): void {
    
    this.getAllRequests();


  }
  private getAllRequests() {
    this.certificateService.getAllRequests().subscribe({
      next: (result) => {
        this.certificates = result;
        this.hasLoaded = true;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  showRequest(certificate: PastRequests):void{
    console.log(certificate);
    this.requestForm.controls['id'].setValue(String(certificate.id));
  }

  acceptPressed(){
    this.showDeclineReason = false;
    this.acceptDecline();
  }
  declinePressed(){
    this.showDeclineReason = true;
  }
  acceptDecline():void{
    if(!this.requestForm.valid){
      this.hasError = true;
      this.errorMessage = 'Please fulfill all fields correctly';
      return;
    }
    if(this.showDeclineReason === true && this.requestForm.value.reason.trim()===''){
      this.hasError = true;
      this.errorMessage = 'Please enter a reason for declining the request';
      return;
    }
    if(!this.showDeclineReason){
      this.certificateService.acceptRequest(Number(this.requestForm.value.id)).subscribe({
        next: (result) =>{
          alert('Successfully accepted request!');
          this.requestForm.reset();
          this.getAllRequests();
          
        },
        error: (myError: HttpErrorResponse) =>{
          if(myError.status===200) {
            alert('Successfully accepted request!');
            this.requestForm.reset();
            this.getAllRequests();
            return;
          }

          this.hasError = true;
          this.errorMessage = myError.error.message;
        }
      });
    }
    else{
      this.certificateService.declineRequest(Number(this.requestForm.value.id), this.requestForm.value.reason).subscribe({
        next: (result) =>{
          this.hasError = false;
          alert('Successfully declined request!');
          this.requestForm.reset();
          this.getAllRequests();

        },
        error: (myError: HttpErrorResponse) =>{
          this.hasError = true;
          this.errorMessage = myError.error.message;
        }
      })
    }


  }

}
