import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { Task2ChildComponent } from './task2-child/task2-child.component';
import { Task2ChildYComponent } from './task2-child-y/task2-child-y.component';
import { Task3Component } from './task3/task3.component';
import { Task4Child1Component } from './Task4_base/task4-child1/task4-child1.component';
import { Task4Child2Component } from './Task4_base/task4-child2/task4-child2.component';
import { Task4BaseComponent } from './task4-base/task4-base.component';

import { Task4Child3Component } from './Task4_base/task4-child3/task4-child3.component';
import { Task4Child4Component } from './Task4_base/task4-child4/task4-child4.component';
import { Task4Child5Component } from './Task4_base/task4-child5/task4-child5.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Task1'},
  { path: 'Task1', component: Task1Component },
  { path: 'Task2', component: Task2Component },
  { path: 'Task3', component: Task3Component},
  { path: 'Task4', component: Task4BaseComponent},

 
];


@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    Task2Component,
    Task2ChildComponent,
    Task2ChildYComponent,
    Task3Component,
    Task4BaseComponent,
    Task4Child1Component,
    Task4Child2Component,
    Task4Child3Component,
    Task4Child4Component,
    Task4Child5Component,
   
  ],
  
  entryComponents: [
    Task2Component,
    Task2ChildComponent,
    Task2ChildYComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
