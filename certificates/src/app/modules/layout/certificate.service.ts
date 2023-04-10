import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment';

import { Certificate } from 'src/app/models/Certificates';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  constructor(private http: HttpClient) { }

  getAll() : Observable<Certificate[]> {
    return this.http.get<Certificate[]>(environment.apiHost + "api/certificate")
  }
}
