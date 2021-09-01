import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { CompileShallowModuleMetadata } from '@angular/compiler';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
 
   
   public number:any;
   public name:any;
   ngForm:any;
   public email:any;
   userForm: FormGroup;
  listData:any=[];
  constructor(private router:Router,private fb:FormBuilder) { 
    this.userForm = this.fb.group({
      name: ['',Validators.required],
      email : ['',Validators.required],
       
      phone: ['',Validators.required],
      message: ['',Validators.required]
    })
  
  }
  

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
     console.log(form.value);
  }
}
function form(form: any) {
  throw new Error('Function not implemented.');
}

