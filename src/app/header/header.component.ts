import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from '../datalist/datalist.model';
import { DataserivesService } from '../dataserives.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule],
  providers:[DataserivesService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  listdats$!:Observable<List[]>
constructor( public http:DataserivesService){}
ngOnInit(){
  this.listdats$=this.http.emloyelist$
}
}
