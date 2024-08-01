import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  users: any[] = [];

  constructor() {
    // Retrieve users from local storage
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
  }

}
