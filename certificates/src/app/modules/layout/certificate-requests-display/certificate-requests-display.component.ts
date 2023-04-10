import { Component, OnInit } from '@angular/core';
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
  constructor(private certificateService: CertificateService){


  }
  ngOnInit(): void {
    
    this.certificateService.getAllRequests().subscribe({
      next:(result)=>{
        this.certificates = result;
        this.hasLoaded = true;
      },
      error:(error) =>{
        console.log(error);
      }
    })

  }
  showRequest(certificate: PastRequests):void{
    console.log(certificate);
  }


}
