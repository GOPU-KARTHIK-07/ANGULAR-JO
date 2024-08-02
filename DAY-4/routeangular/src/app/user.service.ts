import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
interface User{
  id:number;
  name:string;

}


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http:HttpClient) { }
  getUser():Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl)

  }
}
