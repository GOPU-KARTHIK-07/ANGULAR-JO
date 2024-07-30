import { Component} from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { InputModalityDetector } from '@angular/cdk/a11y';
import { MydirectiveComponent } from '../mydirective/mydirective.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EmployeeComponent,CommonModule,MatTableModule,MydirectiveComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  display:string = ""
  receiveddata(data:string){
      this.display = data
  }
  type = 2
  disp : string = "karthik gopu"

  emp : any[] = [
    {name:"ravi",ph:9080989434},
    {name:"rav",ph:908099434},
    {name:" hara ravi",ph:9080989434}
  ]

  displayedColumns: string[] = ['name', 'age', 'ph'];
  students = [
    { name: 'gopu karthik', age: 20, ph: '1234567890' },
    { name: 'gopu arjun', age: 22, ph: '0987654321' },
    { name: 'Karthik gk', age: 21, ph: '1122334455' }
  ];

  olympics:any[] = [

    {name:'karthik',age:21,country:'india'}  ,
    {name:'vamsi',age:21,country:'india'}  ,
    {name:'angeline',age:21,country:'ukraine'}  ,
    {name:'hero',age:21,country:'usa'}  ,
   

  ]
}
