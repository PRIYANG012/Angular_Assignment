import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task2ChildYComponent } from './task2-child-y.component';

describe('Task2ChildYComponent', () => {
  let component: Task2ChildYComponent;
  let fixture: ComponentFixture<Task2ChildYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task2ChildYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task2ChildYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
