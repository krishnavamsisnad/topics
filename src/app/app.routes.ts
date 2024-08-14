import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MychartComponent } from './mychart/mychart.component';
import { CardsComponent } from './cards/cards.component';

export const routes: Routes = [
    {path:'',component:MychartComponent},

    {path:'cards',component:CardsComponent}
]
  export class AppRoutingModule { }
