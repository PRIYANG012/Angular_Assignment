import { Component, OnInit } from '@angular/core';
import {
  ComponentRef,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
ViewRef
} from "@angular/core";
import { Task2ChildComponent } from '../task2-child/task2-child.component';
@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {

  @ViewChild("viewContainerRef", { read: ViewContainerRef })
  VCR: ViewContainerRef;

  child_unique_key: number = 0;
  componentsReferences = Array<ComponentRef<Task2ChildComponent>>()



  constructor(private CFR: ComponentFactoryResolver) { }

  createComponent() {
    let componentFactory = this.CFR.resolveComponentFactory(Task2ChildComponent);

    let childComponentRef = this.VCR.createComponent(componentFactory);

    let childComponent = childComponentRef.instance;
    childComponent.unique_key = ++this.child_unique_key;
    childComponent.parentRef = this;

    // add reference for newly created component
    this.componentsReferences.push(childComponentRef);
  }



  ngOnInit(): void {
  }

}
