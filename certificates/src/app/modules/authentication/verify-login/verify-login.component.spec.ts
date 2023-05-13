import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyLoginComponent } from './verify-login.component';

describe('VerifyLoginComponent', () => {
  let component: VerifyLoginComponent;
  let fixture: ComponentFixture<VerifyLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
