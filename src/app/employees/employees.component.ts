import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  
  
  dtOptions: DataTables.Settings = {};
  
  getdata: (()=> void) | null | undefined;
  userForm:FormGroup;
  listData:any;
  firstname:any;
  lastname:any;
  Email:any;
  Contact_No:any;
  Date_of_birth:any;

  posts: any;

  constructor(private fb:FormBuilder ,private employee:EmployeeService,private http: HttpClient){
  
     this.getdata=null;
      this.listData = [];
     
    this.userForm = this.fb.group({
      fname : ['', Validators.required],
      lname : ['', Validators.required],
      email : ['', Validators.required],
      ContactNo: ['', Validators.required],
      dob: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getData();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
 
  }
  
  dataArray: any=[];
  getData(){
    
    this.dataArray=this.employee.employeService();
  }

  addItem(){
    this.listData.push(this.userForm.value);
    this.userForm.reset();
  }



 

}