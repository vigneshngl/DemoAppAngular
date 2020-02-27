import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpoloyeeregRfComponent } from './empoloyeereg-rf.component';

describe('EmpoloyeeregRfComponent', () => {
  let component: EmpoloyeeregRfComponent;
  let fixture: ComponentFixture<EmpoloyeeregRfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpoloyeeregRfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpoloyeeregRfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
