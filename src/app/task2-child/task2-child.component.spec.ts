import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task2ChildComponent } from './task2-child.component';

describe('Task2ChildComponent', () => {
  let component: Task2ChildComponent;
  let fixture: ComponentFixture<Task2ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task2ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task2ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
