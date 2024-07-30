import { Component ,EventEmitter,Output} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [MatButtonModule, CommonModule,],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  kar: string = "";

  myFunction() {
    this.kar = "hello gk";
  }
 @Output() msgevent = new EventEmitter<string> ()
  sendmessage(){
    this.msgevent.emit("this is my emp data")
  }
}
