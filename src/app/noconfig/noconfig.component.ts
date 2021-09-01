import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noconfig',
  template: `
  <section class="vh-100" >
        
  <div class="row d-flex justify-content-center align-items-center h-100">
    <div class="col col-xl-10">
     
      <div class="card" style="border-radius: 1rem;" >
         

       
          

          <div class=" d-flex align-items-center">
            <div class="card-body p-4 p-lg-5 text-black">
                  
                  <div class="col-md-3 col-lg-7 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">

             
          
          
                      <h2 style="text-align:center" left:1000px>Page Not Found</h2>
           
      
          </div>
          </div></div></div></div></div></div></section>

  `,
  styles: [
  ]
})
export class NoconfigComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
