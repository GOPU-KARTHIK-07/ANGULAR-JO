import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { CommonModule } from '@angular/common';
import {GradePipe} from "./grade.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, FooterComponent, HeaderComponent,CommonModule,GradePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'debugtest';
  constructor(){
    console.log("hello constructor")
  }
  ngOnInit(){
    console.log("something guys")
  }
  playing(){
    var mynme = "hero"
    console.log("happy happy happy")
    console.log(`${mynme} is the hero`)

  }
  marks = [34,45,67,89,23,65,99,100,22,45,12,87]
}
