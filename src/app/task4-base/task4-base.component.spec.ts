import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task4BaseComponent } from './task4-base.component';

describe('Task4BaseComponent', () => {
  let component: Task4BaseComponent;
  let fixture: ComponentFixture<Task4BaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task4BaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task4BaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
