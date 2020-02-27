import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncMessageComponent } from './async-message.component';

describe('AsyncMessageComponent', () => {
  let component: AsyncMessageComponent;
  let fixture: ComponentFixture<AsyncMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
