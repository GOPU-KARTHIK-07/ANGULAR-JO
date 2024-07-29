import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule,FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  mycolor :string = "green"
  demobind:string = "yellow"
  myfontsize:string = "25px"




  isAccepted = true
  myname : string = "Karthik"
  isAdmin  = false
  policyAccepted = false
  getData() : string{
    return `my name is ${this.myname}`
  }
   a = 10
   b = 20 

   users = {
    name: "Ravi",
    age : null,
    gender : "male",
   }
   imageurl = "assets/images/download.jpg"

   hello(){
    alert("this is the hello box")
   }
   myusername :string = "gk"
   changeText(myvalue:any){
      this.myusername = myvalue
   }
   constructor(){
    
   }
  //  class binding
  mybg  = "mybgcolor_class"
  myfont = "myfontcolor_class"


}
