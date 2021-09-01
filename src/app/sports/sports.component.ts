import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { SportService } from '../sport.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {
  
  
  
  obj: any;
  frm: any;
  temArray: any=[];
  check: any;
  isselected: boolean=false;
 
 
  
  constructor( private sport:SportService) { }

  ngOnInit(): void {
    this.getProduct();
  }
  checkboxArray:any=[{
    id:1,
    type:"checkbox",
    name:"tennis",
    content:"Tennis is a racket sport that can be played individually against a single opponent or between two teams of two players each."
  },
  {
    id:2,
    type:"checkbox",
    name:"cricket",
    content:"Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard pitch with a wicket at each end, each comprising two bails balanced on three stumps.",
    isselected:false
  },
  {
    id:3,
    type:"checkbox",
    name:"football",
    content:"Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. Unqualified, the word football normally means the form of football that is the most popular where the word is used.",
    isselected:false
   },
 
  {
    id:4,
    type:"checkbox",
    name:"kabadi",
    content:"Kabaddi is a contact team sport. Played between two teams of seven players, the objective of the game is for a single player on offence, referred to as a raider to run into the opposing team's",
    isselected:false
  }
];

sportArray:any=[];  
arays:any=[];
letArrays:any=[];
getProduct(){
this.sportArray=this.sport.productService();
this.arays=this.sport.productService();
this.letArrays=this.sport.productService();
}
tempArray:any=[];
newArray:any=[];
onChange(event: any){
  if(event.target.checked){
    this.tempArray=this.arays.filter((e:any)=> e.id==event.target.value);
      this.sportArray=[];
      this.newArray.push(this.tempArray);
      for(let i=0;i<this.newArray.length;i++){
        var firstArray=this.newArray[i];
        for(let i=0;i<firstArray.length;i++){
          var obj=firstArray[i];
          this.sportArray.push(obj);
        }
      }
  
    
  } else {
    this.tempArray=this.sportArray.filter((e:any)=> e.id !=event.target.value);
     this.sportArray=[];
     this.newArray=[];
     this.newArray.push(this.tempArray);
     for(let i=0;i<this.newArray.length;i++){
      var firstArray=this.newArray[i];
      for(let i=0;i<firstArray.length;i++){
        var obj=firstArray[i];
        this.sportArray.push(obj);
      }}}
      if (!event.target.checked && this.sportArray==0) {
        alert("no one is selcted")
        for(let i=0;i<this.letArrays.length;i++){
          var obj1=this.letArrays[i];
         this.sportArray.push(obj1);
         }
        }
      
    
  }

x:any;

  onSubmit(){
      
   }
  }


