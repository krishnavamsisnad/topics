import { Component } from '@angular/core';
import { FromsComponent } from './froms/froms.component';
import { ChosethecorectansersComponent } from "./chosethecorectansers/chosethecorectansers.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FromsComponent, ChosethecorectansersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'topics';
}
