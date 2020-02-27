import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeregtdComponent } from './employeeregtd.component';

describe('EmployeeregtdComponent', () => {
  let component: EmployeeregtdComponent;
  let fixture: ComponentFixture<EmployeeregtdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeregtdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeregtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
