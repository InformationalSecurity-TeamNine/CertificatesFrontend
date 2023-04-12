import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateWithdrawDisplayComponent } from './certificate-withdraw-display.component';

describe('CertificateWithdrawDisplayComponent', () => {
  let component: CertificateWithdrawDisplayComponent;
  let fixture: ComponentFixture<CertificateWithdrawDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateWithdrawDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificateWithdrawDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
