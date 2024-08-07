import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {


@Input() childData:string = ""

  ngOnChanges(changes:SimpleChanges){
    if(changes['childData']){
      console.log("CHILD DATA IS CHANGED _ _ "+ changes['childData'].currentValue)
    }
  }
  currentNumber : number = 0
  intervalCycle : any 
  ngOnInit(){
    this.intervalCycle = setInterval(() => {
      this.currentNumber ++
      console.log("CURRENT CYCLE: "+ this.intervalCycle)
    }, 3000)
    
  }
  ngOnDestroy(){
    if(this.intervalCycle){
      clearInterval(this.intervalCycle)
      console.log("Destroyed interval cycle")
    }
  }

}
