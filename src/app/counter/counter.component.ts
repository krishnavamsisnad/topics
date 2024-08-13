import { Component, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IcOUNTER } from './counterr.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  counter:IcOUNTER[]=[]
  counterId = 0;
  @Output() 
  addcounter(){
    if (this.counter) {
      this.counter.push({ id: this.counterId++, count: 0 });
    }
  }
  increment(counter:IcOUNTER){
    counter.count++
  }
  decrement(counter:IcOUNTER){
    if(counter.count>0){
      counter.count--
    }

  }

}
