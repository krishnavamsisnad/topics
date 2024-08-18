import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../enviroment/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpserivesService {

  constructor(public http : HttpClient) { }
  ApiUrl = environment.ApiUrl;
  

}
