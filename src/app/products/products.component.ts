import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { Router } from 'express';
import { HttpserivesService } from '../httpserives.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule],
  providers:[HttpserivesService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  proucts:any
constructor(public routes:ActivatedRoute, public rout:Router,public http:HttpserivesService){}
  ngOnInit(){
    this.getdata()
  }

  getdata(){
    this.http.getAllproducts().subscribe({
      next:data=>{
        this.proucts=data
      }
    })
  }
}
