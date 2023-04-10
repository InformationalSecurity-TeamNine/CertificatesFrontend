import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateRequestsDisplayComponent } from './certificate-requests-display.component';

describe('CertificateRequestsDisplayComponent', () => {
  let component: CertificateRequestsDisplayComponent;
  let fixture: ComponentFixture<CertificateRequestsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateRequestsDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificateRequestsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
