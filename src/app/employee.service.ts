import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   constructor() { }
   employeService(){
     return[{
       firstname:"vetri",
       lastname:"vel",
       Email:"ads@",
       Contact_No:748512369,
       Date_of_birth:"12-12-2012"
     },
     {
      firstname:"tomcruise",
      lastname:"vel",
      Email:"ads@",
      Contact_No:748512369,
      Date_of_birth:"12-12-2012"
    },
    {
      firstname:"jackiechan",
      lastname:"vel",
      Email:"ads@",
      Contact_No:748512369,
      Date_of_birth:"12-12-2012"
    },{
      firstname:"jetlee",
      lastname:"vel",
      Email:"ads@",
      Contact_No:748512369,
      Date_of_birth:"12-12-2012"
    }]
   }
}
