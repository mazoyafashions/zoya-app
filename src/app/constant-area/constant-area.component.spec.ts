import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstantAreaComponent } from './constant-area.component';

describe('ConstantAreaComponent', () => {
  let component: ConstantAreaComponent;
  let fixture: ComponentFixture<ConstantAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstantAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstantAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
