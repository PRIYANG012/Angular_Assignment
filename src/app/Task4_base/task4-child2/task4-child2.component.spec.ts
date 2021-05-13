import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task4Child2Component } from './task4-child2.component';

describe('Task4Child2Component', () => {
  let component: Task4Child2Component;
  let fixture: ComponentFixture<Task4Child2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task4Child2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task4Child2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
