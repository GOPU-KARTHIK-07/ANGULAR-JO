import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment,decrement,reset } from '../../counter.action'; 
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-state',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './state.component.html',
  styleUrl: './state.component.css'
})
export class StateComponent {
  private store = inject(Store)
  count$ : Observable<number>

  constructor(){
    this.count$ = this.store.select('counter')
  }
  increment(){
    this.store.dispatch(increment())

  }
  decrement(){
    this.store.dispatch(decrement())
  }
  reset(){
    this.store.dispatch(reset())
  }

}
