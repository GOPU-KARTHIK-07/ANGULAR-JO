import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
// constructor injection
  constructor() { }
  mymsg = "hello gk from services"
  numList :number[] = [100]
  addNum(num:number){
    this.numList.push(num)
  }

  getList(){
    return this.numList
  }
  getMessage(){
    return this.mymsg
  }
  deleteNum(num: number) {
    const index = this.numList.indexOf(num);
    if (index > -1) {
      this.numList.splice(index, 1);
    }
  }
}
