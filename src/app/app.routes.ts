import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { TodolistComponent } from './todolist/todolist.component';
import { NgModule } from '@angular/core';
import { FromsComponent } from './froms/froms.component';

export const routes: Routes = [
    { path: '', redirectTo: 'counter', pathMatch: 'full' },
    {
        path:'counter',component:CounterComponent
    },
    {
        path:'todolist',component:TodolistComponent
    },
    {
        path:'form',component:FromsComponent
    }
];
NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }