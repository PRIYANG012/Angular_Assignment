import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task4Child4Component } from './task4-child4.component';

describe('Task4Child4Component', () => {
  let component: Task4Child4Component;
  let fixture: ComponentFixture<Task4Child4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task4Child4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task4Child4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
