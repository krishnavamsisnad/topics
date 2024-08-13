import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IcOUNTER } from './counterr.model';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  counter!:IcOUNTER[]
  addcounter(){
    
  }

}
