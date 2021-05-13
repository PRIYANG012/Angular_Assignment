import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {

  phoneNumberForm: FormGroup;
  remove:boolean=false;
  constructor(
    private fb: FormBuilder
  ) {
    this.phoneNumberForm = this.fb.group({
    
      PhoneNumbers: this.fb.array([
        this.fb.control(null)
      ],[Validators.maxLength(10)])
    })
  }

  addPhone(): void {
    this.remove=true;
    (this.phoneNumberForm.get('PhoneNumbers') as FormArray).push(
      this.fb.control(null)
    );
  }

  removePhone(index) {
    if(index<=1){
      this.remove=false;
    }
    (this.phoneNumberForm.get('PhoneNumbers') as FormArray).removeAt(index);
  }

  getPhoneNumbersFormControls(): AbstractControl[] {
    return (<FormArray> this.phoneNumberForm.get('PhoneNumbers')).controls
  }

  send(values) {
    console.log(values);
  }

  ngOnInit(): void {


  }

}
