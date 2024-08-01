import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  myLogin(username:any,password:any,name:any,age:any,message:any)
  {
    console.log(username + " " +password)
    if(username =='karth' && password == '1234' ){
      // using session i am saving the data 
      // sessionStorage.setItem("myLoggedIn","true")

      // console.log(sessionStorage)

      let users = JSON.parse(localStorage.getItem('users') || '[]');

      // Add new user data
      const user = {name, age, message };
      users.push(user);

      // Save updated users array back to local storage
      localStorage.setItem('users', JSON.stringify(users));

      console.log('Login successful. Data saved in local storage.');

    }
    else{
      // sessionStorage.setItem("myLoggedIn","false")
      localStorage.setItem("myLoggedIn","false")
    }
  }

}
