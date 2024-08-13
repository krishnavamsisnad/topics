import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IcOUNTER } from '../counter/counterr.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() counter_data:IcOUNTER[]=[]

}
