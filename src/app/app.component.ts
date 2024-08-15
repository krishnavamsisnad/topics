import { Component } from '@angular/core';
import { FromsComponent } from './froms/froms.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FromsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'topics';
}
