import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IcOUNTER } from './counter/counterr.model';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
couterdata$=new BehaviorSubject<IcOUNTER[]>([])
  constructor() { }
}
