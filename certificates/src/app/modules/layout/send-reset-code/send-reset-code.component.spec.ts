import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendResetCodeComponent } from './send-reset-code.component';

describe('SendResetCodeComponent', () => {
  let component: SendResetCodeComponent;
  let fixture: ComponentFixture<SendResetCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendResetCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendResetCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
