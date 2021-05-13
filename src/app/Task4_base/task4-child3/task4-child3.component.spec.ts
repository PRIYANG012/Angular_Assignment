import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task4Child3Component } from './task4-child3.component';

describe('Task4Child3Component', () => {
  let component: Task4Child3Component;
  let fixture: ComponentFixture<Task4Child3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task4Child3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task4Child3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
