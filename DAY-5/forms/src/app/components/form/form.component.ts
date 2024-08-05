import { Component ,OnInit} from '@angular/core';
import {FormsModule,NgForm} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
 
interface City {
  name: string;
  code: string;
}
 
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,CommonModule,DropdownModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  register(regData : NgForm){
    console.log(regData.value)
    console.log(regData.valid)
 
 
}
cities: City[] | undefined;
 
selectedCity: City | undefined;
 
ngOnInit() {
    this.cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
}
 
}
 