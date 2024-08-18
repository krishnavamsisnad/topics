import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { List } from './datalist/datalist.model';

@Injectable({
  providedIn: 'root'
})
export class DataserivesService {


  emloyelist$=new BehaviorSubject<List[]>([])
  constructor() { }
}
