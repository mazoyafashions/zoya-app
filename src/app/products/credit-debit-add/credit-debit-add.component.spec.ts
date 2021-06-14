import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditDebitAddComponent } from './credit-debit-add.component';

describe('CreditDebitAddComponent', () => {
  let component: CreditDebitAddComponent;
  let fixture: ComponentFixture<CreditDebitAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditDebitAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditDebitAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
