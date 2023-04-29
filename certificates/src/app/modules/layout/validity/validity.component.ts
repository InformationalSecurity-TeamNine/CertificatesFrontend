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


  file: File
  isValidUpload: boolean = false;
  isShownUpload: boolean = false;

  isValidId: boolean = false;
  isShownId: boolean = false;

  errorMessage: string = '';
  errorMessageUpload: string = '';

  idValidity = new FormGroup(
    {
      id: new FormControl('', [Validators.required, Validators.minLength(1)])
    }
  );

  uploadValidity = new FormGroup(
    {
      upload: new FormControl(null, [Validators.required])
    }
  );

  constructor(private certificateService: CertificateService){

  }

  getValidityByUpload() {
    this.isShownUpload = false;
    this.errorMessage = '';
    if(!this.file){
      alert('Please insert a file;')
      return;
    }



    const formData = new FormData();
    formData.append('file', this.file);

    this.certificateService.isValidUploaded(formData).subscribe({
      next:(result) =>{
        this.isValidUpload = result;
        this.isShownUpload = true;
      },
      error:(notFound: HttpErrorResponse)=>{
        this.errorMessageUpload = notFound.error.message;
      }
    })


  }
  onFileSelected(event: any) {
    const MAX_FILE_SIZE_BYTES = 1073741824;
    const file: File = event.target.files[0]
    const fileName: string = file.name;

    console.log(fileName)
    const fileExtension: string = fileName.split('.').pop().toLowerCase();
    console.log(fileExtension)
    if(fileExtension !== 'crt'){
      alert('The selecgted file must have a ".crt" extension');
      this.uploadValidity.get('upload').setValue(null);
      return;
    }

    if(file.size > MAX_FILE_SIZE_BYTES){
      alert('File size is too large, please select a file smaller than 1GB,')
      return;
    }

    this.file = event.target.files[0];
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
