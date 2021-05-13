import { Component, OnInit } from '@angular/core';
import { Task2ChildComponent } from '../task2-child/task2-child.component';

@Component({
  selector: 'app-task2-child-y',
  templateUrl: './task2-child-y.component.html',
  styleUrls: ['./task2-child-y.component.css']
})
export class Task2ChildYComponent implements OnInit {

  

  public unique_key_y: number;
  public parentRef_y: Task2ChildComponent;
  constructor() { }

  ngOnInit(): void {
  }

}
