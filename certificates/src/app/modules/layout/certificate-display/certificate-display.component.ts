import { Component, OnInit } from '@angular/core';
import { Certificate } from 'src/app/models/Certificates';
import { CertificateService } from '../certificate.service';

@Component({
  selector: 'app-certificate-display',
  templateUrl: './certificate-display.component.html',
  styleUrls: ['./certificate-display.component.css']
})
export class CertificateDisplayComponent implements OnInit{

  certificates: Certificate[];
  hasLoaded: boolean = false;
  constructor(private certificateService: CertificateService){


  }
  ngOnInit(): void {
    
    this.getCertificates();
    this.certificateService.certificateCreatedValue$.subscribe((result) =>{
      if(result === true){
          this.getCertificates();
          this.certificateService.setCertificateCreated(false);
      }
    });

  }
  private getCertificates() {
    this.certificateService.getAll().subscribe({
      next: (result) => {
        this.certificates = result;
        this.hasLoaded = true;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  showCertificate(certificate: Certificate):void{
    console.log(certificate);
  }



}
