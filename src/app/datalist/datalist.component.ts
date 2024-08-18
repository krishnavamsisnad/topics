import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataserivesService } from '../dataserives.service';
import { List } from './datalist.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-datalist',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  providers:[DataserivesService],
  templateUrl: './datalist.component.html',
  styleUrl: './datalist.component.css'
})
export class DatalistComponent {
  listdats$!:Observable<List[]>
  listform!:FormGroup
constructor(public tolist:DataserivesService, public fb:FormBuilder){}

ngOnInit(): void {
this.listdats$=this.tolist.emloyelist$
this.intinationsfrom()

}

intinationsfrom(){
this.listform=this.fb.group({
data:[null,Validators.required]
})
}
addData(): void {
if (this.listform.valid) {
const datanew = this.tolist.emloyelist$.value;
const newItem = {
  
  employename: this.listform.get('data')?.value || ''
};
const updatedData = [...datanew, newItem];
this.tolist.emloyelist$.next(updatedData);
// this.tolist.listdata.update((value)=>[...datanew,newItem])
this.listform.reset();
}

}

deletrow(i: number) {
const datanew = this.tolist.emloyelist$.value;
datanew.splice(i, 1); 
this.tolist.emloyelist$.next([...datanew]); 
this.listform.reset();
}
}
