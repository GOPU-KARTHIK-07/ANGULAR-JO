import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogInOutService {
  private readonly username = 'karthik';
  private readonly password = 'kar@123';
  private isLoggedIn = false;

  constructor() { }

  login(username: string, password: string): boolean {
    if (username === this.username && password === this.password) {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  getLoginStatus(): boolean {
    return this.isLoggedIn;
  }
}