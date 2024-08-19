import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from 'express';
import { HttpserivesService } from '../httpserives.service';

@Component({
  selector: 'app-productdetailes',
  standalone: true,
  imports: [RouterModule],
  providers:[HttpserivesService],
  templateUrl: './productdetailes.component.html',
  styleUrl: './productdetailes.component.css'
})
export class ProductdetailesComponent {

product:any
  constructor(public router:ActivatedRoute,public route:Router,public http:HttpserivesService){

  }
  ngOnInit(){
    let id=this.router.snapshot.params['id']
this.http.getbyid(id).subscribe((data:any)=>{
  console.log(data)
  this.product=data
})
  }

}
