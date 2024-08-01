import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,SidenavComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
