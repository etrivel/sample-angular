
import { Component, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myGroup!: FormGroup;
   public pass:any;
   public email:any;
  
 
 

  constructor(private router:Router,private fb:FormBuilder) { 
   /// keyPressNumbers(event: any) {
     // var inp = String.fromCharCode(event.keyCode);
  
     // if (/[a-zA-Z0-9]/.test(inp)) {
      //  return true;
     //// } else {
       // event.preventDefault();
       // return false;}}
//  }
     this.myForm();
  

  }
  
  onSelect(){
    this.router.navigate(['/home']);
  }
  onSubmit(){
    
  }
  onClick(){
    this.router.navigate(['/signup'])
  }
  ngOnInit(): void {
    
  }
  myForm(){
    this.myGroup=this.fb.group({
      email: ['', [Validators.required, 
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")] ],
        pass:['',[Validators.required,
          Validators.minLength(4)]]
    });
      
  }
}

   
