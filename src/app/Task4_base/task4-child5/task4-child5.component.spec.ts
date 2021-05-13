import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task4Child5Component } from './task4-child5.component';

describe('Task4Child5Component', () => {
  let component: Task4Child5Component;
  let fixture: ComponentFixture<Task4Child5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task4Child5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task4Child5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
