import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Subscription } from 'rxjs';

import { CommunicationService } from 'src/app/Services/communication.service';

@Component({
  selector: 'app-task4-child4',
  templateUrl: './task4-child4.component.html',
  styleUrls: ['./task4-child4.component.css']
})
export class Task4Child4Component implements OnInit {

  constructor(private messageService: CommunicationService,
    private formBuilder:FormBuilder) { }

  InputForm: FormGroup;
  isSubmitted  =  false;

  messages:any;
  subscription: Subscription;

  ngOnInit(): void {
    this.InputForm  =  this.formBuilder.group({
      msg: ['']
     
  });


    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message) {
        this.messages=message.text;
      } else {
        this.messages="";
      }
    });
  }

  get formControls() { return this.InputForm.controls; }

  sendMessage(): void {
   var msg:string= this.InputForm.value.msg;
    this.messageService.sendMessage(msg);
}



}
