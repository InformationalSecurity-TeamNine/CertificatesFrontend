import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorMessage } from 'src/app/models/ErrorMessage';
import { CertificateService } from '../certificate.service';

@Component({
  selector: 'app-validity',
  templateUrl: './validity.component.html',
  styleUrls: ['./validity.component.css']
})
export class ValidityComponent {

  isValidId: boolean = false;
  isShownId: boolean = false;
  errorMessage: string = '';
  idValidity = new FormGroup(
    {
      id: new FormControl('', [Validators.required, Validators.minLength(1)])
    }
  );
  constructor(private certificateService: CertificateService){

  }

  getValidityById(){
    this.isShownId = false;
    this.errorMessage = '';
    if(!this.idValidity.valid){
      alert('Please enter a value;')
      return;
    }
    this.certificateService.isValid(Number(this.idValidity.value.id)).subscribe({
      next:(result) =>{
        this.isValidId = result;
        this.isShownId = true;
      },
      error:(notFound: HttpErrorResponse)=>{
        this.errorMessage = notFound.error.message;
      }
    })
  }
}
