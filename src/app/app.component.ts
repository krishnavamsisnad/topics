import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MychartComponent } from "./mychart/mychart.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MychartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'topics';
}
