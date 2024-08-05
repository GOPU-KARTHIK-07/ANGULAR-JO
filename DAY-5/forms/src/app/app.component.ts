import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ReactivefromComponent } from "./components/reactivefrom/reactivefrom.component";
import { CardModule } from 'primeng/card';
import { CardsComponent } from "./components/cards/cards.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, ReactivefromComponent, CardModule, CardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms';
}
