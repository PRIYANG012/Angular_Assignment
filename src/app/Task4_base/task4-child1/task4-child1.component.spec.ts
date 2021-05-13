import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task4Child1Component } from './task4-child1.component';

describe('Task4Child1Component', () => {
  let component: Task4Child1Component;
  let fixture: ComponentFixture<Task4Child1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task4Child1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task4Child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
