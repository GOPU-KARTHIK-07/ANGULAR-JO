import { Component} from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBar} from '@angular/material/snack-bar';
import { InputModalityDetector } from '@angular/cdk/a11y';
import { MydirectiveComponent } from '../mydirective/mydirective.component';
import { MycustompipePipe } from '../../mycustompipe.pipe';
import { CardModule } from 'primeng/card'
import { TempipePipe } from '../../tempipe.pipe';
import { ButtonModule } from 'primeng/button';
import { MessengerService } from '../../messenger.service';
import { FormsModule } from '@angular/forms';
import { LogInOutService } from '../../log-in-out.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EmployeeComponent,CommonModule,MatButtonModule,MatFormFieldModule,MatInputModule,MatTableModule,MydirectiveComponent,
    MycustompipePipe,TempipePipe,CardModule,ButtonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cards = Array(10).fill(0);
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
  result :string = "hello gk its high day"
  details = {
    name : "ravi",
    phone: 9704642885

  }
  myvlaue :number = 90.45
  mydate : Date = new Date()
  myname:string = "karthik"

  degrees:any[] = [
    {value:32.000000,unit:'F'},
    {value:12.909,unit:'C'},
    {value:22.8900,unit:'F'},
    {value:14.7645,unit:'F'},
    {value:109.98765,unit:'C'},
    {value:19.098765432,unit:'C'},

    
  ]
  isFahrenheit(unit: string): boolean {
    // Return true if the unit is C because it will be converted to F
    return unit === 'C';
  }
  // constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  dat: string = '';
 myar:number[] = []
  constructor(private msgSer: MessengerService,private logInOutService: LogInOutService,private _snackBar: MatSnackBar) {
    this.myar = this.msgSer.getList()
    this.isLoggedIn = this.logInOutService.getLoginStatus();
    this.isLoggedIn = this.logInOutService.getLoginStatus();
  }

  getMessage() {
    this.dat = this.msgSer.getMessage();
  }

  addNumbers(num:string){
    var res : number = parseInt(num)
    this.msgSer.addNum(res)
    this.myar = this.msgSer.getList()
  }
  deleteNumber(num: number) {
    this.msgSer.deleteNum(num);
    this.myar = this.msgSer.getList();
  }

  username = '';
  password = '';
  isLoggedIn = false;

  // constructor(private logInOutService: LogInOutService) {
   
  

  login() {
    if (this.logInOutService.login(this.username, this.password)) {
      this.isLoggedIn = true;
    } else {
      alert('Invalid credentials');
    }
  }

  logout() {
    this.logInOutService.logout();
    this.isLoggedIn = false;
  }
}
  


