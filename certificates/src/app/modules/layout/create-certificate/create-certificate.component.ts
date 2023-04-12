import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../authentication/authentication.service';
import { CertificateService } from '../certificate.service';

@Component({
  selector: 'app-create-certificate',
  templateUrl: './create-certificate.component.html',
  styleUrls: ['./create-certificate.component.css']
})
export class CreateCertificateComponent implements OnInit {

  role:string = '';
  issuerSN: string = '';
  hasError: boolean = false;
  errorMessage: string = '';
  selectedType: string = '';
  certificateForm = new FormGroup(
    {
      type: new FormControl('ROOT'),
      serialNumber: new FormControl(''),
      date: new FormControl('')
    }
  );

  ngOnInit(): void {
    this.role = this.authenticationService.getRole();
    if(this.role === 'ADMIN')  this.selectedType = 'ROOT';
    else this.selectedType = 'INTERMEDIATE';

  }

  constructor(private authenticationService: AuthenticationService, private certificateService: CertificateService){

  }
  create(): void{
      this.hasError = false;
      if(!this.certificateForm.valid){
        alert('Invalid date.')
        return;
      }
      const date = new Date(this.certificateForm.value.date);
      if(date <= new Date()){
        alert('Date/time must be after current time.');
        return;
      }
      let type = this.certificateForm.value.type;
      if(type === '' && this.role === 'ADMIN') type = 'ROOT';
      const sn = this.certificateForm.value.serialNumber;
      if(type !== 'ROOT' && sn.trim()===''){
        alert('Please enter a valid Serial number');
        return;
      }
      this.certificateService.create(date, type, sn).subscribe({
        next:(result) =>{
            alert('Successfully created a certificate');
            this.certificateForm.reset();
            if(this.role === 'ADMIN') {this.certificateForm.value.type = 'ROOT';this.selectedType = 'ROOT';}
            else {this.certificateForm.value.type = 'INTERMEDIATE';this.selectedType = 'INTERMEDIATE';}
            this.certificateService.setCertificateCreated(true);
            
        },
        error: (customError: HttpErrorResponse) =>{
            this.hasError = true;
            this.errorMessage = customError.error.message;
        }
      });
  }
}
