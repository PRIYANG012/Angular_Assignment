import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {

  SeriesForm: FormGroup;
  isSubmitted  =  false;
  numberAtIndex:number;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.SeriesForm  =  this.formBuilder.group({
      index: ['', Validators.required]
     
  });

  }


  get formControls() { return this.SeriesForm.controls; }

  onSubmit(){
    console.log(this.SeriesForm.value);
    this.isSubmitted = true;
    if(this.SeriesForm.invalid){
      return;
    }
    else{
      var v:number=this.SeriesForm.value.index;

    
      if(v%2==0)
      {
          this.numberAtIndex=v*v-1;
      }
      else
      {
        this.numberAtIndex=v*v+1;
      }
     
    }
   
  }
}
