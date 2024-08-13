import { Component, OnInit,  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IcOUNTER } from './counterr.model';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit {

  counter$!:Observable<IcOUNTER[]>;
  counterId = 0;
 constructor(public couter: CounterService){}

 ngOnInit(){
this.counter$=this.couter.couterdata$
  }
  addcounter(){
      const counterdata=this.couter.couterdata$.value
      const updatedata=[...counterdata,{ id: this.counterId++, count: 0 }]
      this.couter.couterdata$.next(updatedata)
    }
  
    increment(counter:IcOUNTER){
      counter.count++
    }
    
    decrement(counter:IcOUNTER){
      if(counter.count>0){
        counter.count--
      }

    }

    deleteCounter(counter:any){
       const count_data = this.couter.couterdata$.value
     this.couter.couterdata$.next(count_data.filter(c => c.id !== counter.id));
    }
  
}


