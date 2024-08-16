import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildcompounentComponent } from "./childcompounent/childcompounent.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildcompounentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'topics';
}
