import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-mydirective',
  standalone: true,
  imports: [],
  templateUrl: './mydirective.component.html',
  styleUrls: ['./mydirective.component.css'],
})
export class MydirectiveComponent {
   @Input() name! : string
   @Input() phone! :number

}
