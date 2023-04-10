import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidityComponent } from './validity.component';

describe('ValidityComponent', () => {
  let component: ValidityComponent;
  let fixture: ComponentFixture<ValidityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
