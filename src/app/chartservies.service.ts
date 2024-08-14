import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartserviesService {

  constructor(public http:HttpClient) { }

loadsales(){
return this.http.get('http://localhost:3000/sales')
}
loadproducts(){
  return this.http.get("http://localhost:3000/products")
}
}
