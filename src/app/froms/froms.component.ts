import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-froms',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './froms.component.html',
  styleUrl: './froms.component.css'
})
export class FromsComponent implements OnInit {
personfrodata!:FormGroup
 constructor(public fb:FormBuilder) {
  
 }

 ngOnInit(){
  this.inititionfrom()
 }

 inititionfrom(){
  this.personfrodata=this.fb.group({
    name:[null,Validators.required],
    age:[null,Validators.required],
    address:this.fb.array([])
  })


 }

 addressdata() :FormGroup{
  return this.fb.group({
    addressname:[null,Validators.required],
    pinnumber:[null,Validators.required],
    phonenumber:[null,Validators.required],
    street:[null,Validators.required]

  })
  
 }

 addaddress(){
  this.address.push(this.addressdata())
 }

 get address(): FormArray {
  return this.personfrodata.get('address') as FormArray;
}

deletaddres(i:any){
this.address.removeAt(i)
}
formdata(form:FormGroup){
if(form.invalid){
  return
}

console.log(this.personfrodata.value)
this.personfrodata.reset()
  
}



}




