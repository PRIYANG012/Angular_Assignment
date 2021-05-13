import { Component, OnInit } from '@angular/core';
import { Task2Component } from '../task2/task2.component';
import {
  ComponentRef,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
ViewRef
} from "@angular/core";
import { Task2ChildYComponent } from '../task2-child-y/task2-child-y.component';



@Component({
  selector: 'app-task2-child',
  templateUrl: './task2-child.component.html',
  styleUrls: ['./task2-child.component.css']
})
export class Task2ChildComponent implements OnInit {

  
  @ViewChild("viewContainerRef2", { read: ViewContainerRef })
  VCR_Y: ViewContainerRef;

  child_unique_key_Y: number = 0;
  componentsReferences_Y = Array<ComponentRef<Task2ChildYComponent>>()




  public unique_key: number;
  public parentRef: Task2Component;

  constructor(private CFR_Y: ComponentFactoryResolver) { }

  createComponent() {
    let componentFactory = this.CFR_Y.resolveComponentFactory(Task2ChildYComponent);

    let childComponentRef = this.VCR_Y.createComponent(componentFactory);

    let childComponent = childComponentRef.instance;
    childComponent.unique_key_y = ++this.child_unique_key_Y;
    childComponent.parentRef_y = this;

    // add reference for newly created component
    this.componentsReferences_Y.push(childComponentRef);
  }


  ngOnInit(): void {
  }


}
