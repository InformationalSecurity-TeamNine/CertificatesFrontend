import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateDisplayComponent } from './certificate-display.component';

describe('CertificateDisplayComponent', () => {
  let component: CertificateDisplayComponent;
  let fixture: ComponentFixture<CertificateDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificateDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
