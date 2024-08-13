import { Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CounterComponent } from './counter/counter.component';

export const routes: Routes = [
    {path:'',component:CategoriesComponent},
    {path:'counter',component:CounterComponent}
];
