import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-reactivefrom',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactivefrom.component.html',
  styleUrl: './reactivefrom.component.css'
})
export class ReactivefromComponent {
  regForm! : FormGroup
 
  constructor(private myFb : FormBuilder){
    console.log("constructor")
  }
 
  ngOnInit(){
    console.log("ngOnInit")
    this.regForm = this.myFb.group({
      id : [''],
      fname : ['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
      lname : ['',Validators.required],
      email : ['',Validators.required,Validators.email],
      phone : ['1234567890',Validators.required]
    })
  }
 
  register(myformdata : FormGroup){
    console.log(this.regForm.value)
  }
 
}
 