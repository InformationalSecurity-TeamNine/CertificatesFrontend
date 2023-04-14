import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
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
  selected: Certificate | null;
  constructor(private certificateService: CertificateService, private elementRef: ElementRef){


  }
  ngOnInit(): void {
    this.selected = null;
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
    this.certificateService.setSelectedCertificate(certificate);
  }

  //(click)="showCertificate(certificate)" ovo ide u tr ngFor sta vec


  onRowClick(event: MouseEvent, item: any){
    this.certificateService.setSelectedCertificate(<Certificate>item);
    this.selected = <Certificate>item;
    console.log(item as Certificate);
    event.stopPropagation();
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent){
    if(!this.elementRef.nativeElement.contains(event.target)){
      this.certificateService.setSelectedCertificate(null);
      this.selected = null;
    }
  }


  downloadCertificate() {
    this.certificateService.downloadCertificate(this.selected.id).subscribe({
        next: (res) => {

          const a = document.createElement('a');
          const objectUrl = URL.createObjectURL(res);
          a.href = objectUrl;
          a.download = "Certificate.crt";
          a.click();
          URL.revokeObjectURL(objectUrl);

        },

        error: (error) => {

          console.log(error);

        }

      });



  }


}



