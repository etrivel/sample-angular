import { TemplateBindingParseResult } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  constructor() { }
  productService(){
    return[{
      id:1,
      type:"checkbox",
      name:"tennis",
      content:"Tennis is a racket sport that can be played individually against a single opponent or between two teams of two players each.",
      image:"https://duckduckgo.com/i/d0013c06.jpg"
    },
    {
      id:2,
      type:"checkbox",
      name:"cricket",
      content:"Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard pitch with a wicket at each end, each comprising two bails balanced on three stumps.",
      image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Vts3VXTGB-OjruCUt5jAgAHaEd%26pid%3DApi&f=1"
    },
    {
      id:3,
      type:"checkbox",
      name:"football",
      content:"Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. Unqualified, the word football normally means the form of football that is the most popular where the word is used.",
      image:"https://duckduckgo.com/i/49e1b3a7.jpg"

    },
   
    {
      id:4,
      type:"checkbox",
      name:"kabadi",
      content:"Kabaddi is a contact team sport. Played between two teams of seven players, the objective of the game is for a single player on offence, referred to as a raider to run into the opposing team's",
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Iran_men%27s_national_kabaddi_team_13970602000432636707284535394012_98208.jpg/220px-Iran_men%27s_national_kabaddi_team_13970602000432636707284535394012_98208.jpg"

    }
  ]
  }
}
