import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterCodeComponent } from './enter-code.component';

describe('EnterCodeComponent', () => {
  let component: EnterCodeComponent;
  let fixture: ComponentFixture<EnterCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
