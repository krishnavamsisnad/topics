import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductdetailesComponent } from './productdetailes/productdetailes.component';

export const routes: Routes = [
  {
path :'',component:ProductsComponent
  },
  {
    path:'products/:id',component:ProductdetailesComponent
  }
];
