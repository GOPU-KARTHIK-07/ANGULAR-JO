import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChildComponent,FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  parentData: any ; 
  showTimer : boolean = true
  toggleTimer ( ){
    this.showTimer = !this.showTimer
  }

 

}
