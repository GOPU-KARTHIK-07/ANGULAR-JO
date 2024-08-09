import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
//fixture is the wrapper around the component
export class HeaderComponent {
  title = 'gk';


  karth(a:number)
  {
  
    if(a %2 === 0){
      console.log("even")
      return "even" 
     
    }
    else{
      console.log("odd")
      return "odd"
      
    }

  }
  inputNumber : number | undefined
  res : string=" "
  buttonClicked(){
    this.res = `number entered is ${this.inputNumber}`
  }
}
