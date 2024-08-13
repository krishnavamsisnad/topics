import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {  FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Icategories } from '../categories/categories.model';
@Component({
  selector: 'app-add-categories',
  standalone: true,
  imports:  [CommonModule,ReactiveFormsModule],
  templateUrl: './add-categories.component.html',
  styleUrl: './add-categories.component.css'
})
export class AddCategoriesComponent implements OnInit{
catageryform!:FormGroup
catagerys:Icategories[]=[
  {
    id:1,title:'c-1',description:''
  }
]
@Output() catageryadded=new EventEmitter<Icategories>()
constructor(public  fb:FormBuilder){}
ngOnInit(): void {
  this.inilitionform()
}
inilitionform(){

 this.catageryform=this.fb.group({
title:[null],
description:[null]
 })
}

onadd(form:FormGroup){
if(form.invalid){
  return
}
const newCategory: Icategories = {
  id: form.value.id, 
  title: form.value.title,
  description: form.value.description
};

this.catagerys.push(newCategory); 
this.catageryadded.emit(newCategory);
this.catageryform.reset()
}

}
