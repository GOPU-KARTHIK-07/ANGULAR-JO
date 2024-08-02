import { Component } from '@angular/core';
import { UserService } from '../../user.service';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardModule,ButtonModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  users:any[] = [];
  constructor(private userService:UserService){}
  ngOnInit():void{
    this.userService.getUser().subscribe((data)=>{
      this.users =  data;
    });
  }


}
