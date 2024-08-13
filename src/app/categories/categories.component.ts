import { Component } from '@angular/core';
import { Icategories } from './categories.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SingleCategoriesComponent } from '../single-categories/single-categories.component';
import { AddCategoriesComponent } from "../add-categories/add-categories.component";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterModule, SingleCategoriesComponent, AddCategoriesComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  categories:Icategories[]=[
    {
      id:1,title:'category-1',description:'the description'
    }
  ]

  oncatagery(category:Icategories){
    category.id=this.categories.length+1
    this.categories.push(category)
  }
}
