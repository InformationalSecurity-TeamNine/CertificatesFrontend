import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer } from 'rxjs';
import { environment } from 'src/app/environment/environment';

import { Certificate, CertificateWithdrawReturn, DeclineRequestDTO, PastRequests, WithdrawnCertificate } from 'src/app/models/Certificates';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  private certificateCreated$ = new BehaviorSubject<boolean>(false);
  certificateCreatedValue$ = this.certificateCreated$.asObservable();


  setCertificateCreated(created: boolean) {
    this.certificateCreated$.next(created);
  }

  private certificateWithdrawn$ = new BehaviorSubject<boolean>(false);
  certificateWithdrawnValue$ = this.certificateWithdrawn$.asObservable();


  setCertificateWithdrawn(withdrawn: boolean) {
    this.certificateWithdrawn$.next(withdrawn);
  }

  private selectedCertificate$ = new BehaviorSubject<Certificate>(null);
  selectedCertificateValue$ = this.selectedCertificate$.asObservable();


  setSelectedCertificate(selectedCertificate: Certificate) {
    this.selectedCertificate$.next(selectedCertificate);
  }
  constructor(private http: HttpClient) { }

  getAll() : Observable<Certificate[]> {
    return this.http.get<Certificate[]>(environment.apiHost + "api/certificate")
  }

  getAllWithdrawn() : Observable<WithdrawnCertificate[]> {
    return this.http.get<WithdrawnCertificate[]>(environment.apiHost + "api/certificate/withdrawn/")
  }

  getAllRequests() : Observable<PastRequests[]> {
    return this.http.get<PastRequests[]>(environment.apiHost + "api/certificate/past-requests/")
  }

  isValid(id:number): Observable<boolean>{
    return this.http.get<boolean>(environment.apiHost + "api/certificate/valid/" + id);
  }

  create(date:Date, type:string, issuerSN: string):Observable<Certificate>{
    return this.http.post<Certificate>(environment.apiHost + "api/certificate/", 
    {
      id: 0,
      issuerSN: issuerSN,
      type: type,
      time: date
    });
  }

  withdraw(id:number, reason: string): Observable<CertificateWithdrawReturn>{
    return this.http.put<CertificateWithdrawReturn>(environment.apiHost + "api/certificate/withdraw/" + id, {
      reason: reason
    });
  }

  acceptRequest(id:number): Observable<string>{
    return this.http.put<string>(environment.apiHost + "api/certificate/accept-request/" + id, {});
  }
  declineRequest(id:number, reason: string): Observable<DeclineRequestDTO>{
    return this.http.put<DeclineRequestDTO>(environment.apiHost + "api/certificate/decline-request/" + id, {
      reason: reason
    });
  }
}
