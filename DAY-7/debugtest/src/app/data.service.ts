import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  static getAllusers() {
    throw new Error('Method not implemented.');
  }

  constructor(private myHttpClient: HttpClient) {

   }
   getAllusers(){
    return this.myHttpClient.get("api/users")
   }
}
