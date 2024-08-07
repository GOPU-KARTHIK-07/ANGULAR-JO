import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { ChildComponent } from "./components/child/child.component";
import { StateComponent } from "./components/state/state.component";
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, ChildComponent, StateComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations:[
    trigger('fadeout',[
      state('in',style({
        opacity:1
 
      })),
      transition(':enter',[
        style({opacity:0}),
        animate(3000)
 
      ]),
      transition(':leave',[
        animate(6000,style({opacity:0}))
      ])
    ]),
    trigger('zoomFade', [
      state('in', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.5)' }),
        animate('3000ms')
      ]),
      transition(':leave', [
        animate('6000ms', style({ opacity: 0, transform: 'scale(0.5)' }))
      ])
    ])
  
  ]
})
export class AppComponent {
  title = 'proj7';
  isShown = true;
  toggle(){
    this.isShown = !this.isShown
  }
  isFocused = false;
  togglezoom(){
    this.isFocused = !this.isFocused
  }
  constructor(){
    console.log("Compo of homee")
  }
 
  ngOnInit(){
    console.log("nginit called")
 
  }
 
  ngOnChange(){
    console.log("ngOnchange called")
 
  }
 
  ngDoCheck(){
    console.log("ngdocheck called")
   
  }
 
  ngAfterContentInit(){
    console.log("ngaftercontentinit called")
  }
 
  ngAfterViewInit(){
    console.log("ngafterviewinit called")
  }
 
  ngAfterContentChecked(){
    console.log("ngcontentafterchecked called")
 
  }
 
  ngAfterViewChecked(){
    console.log("ngafterviewchecked called")
  }
 
  ngOnDestroy(){
    console.log("ngdestory called")
 
  }
 

}
