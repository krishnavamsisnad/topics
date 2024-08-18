import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../enviroment/environment';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpserivesService {

  constructor(public http : HttpClient,public route:ActivatedRoute) { }
  ApiUrl = environment.ApiUrl;
  apikey=environment.apikey

  getWeather(city: string): Observable<any> {
    const params = new HttpParams()
      .set('q', city)
      .set('appid', this.apikey);
  
    return this.http.get<any>(`${this.ApiUrl}/weather`, { params });
  }
  updateWeatherData(city: string, data: any): Observable<any> {
    const params = new HttpParams()
      .set('q', city)
      .set('appid', this.apikey);
  
    return this.http.put<any>(`${this.ApiUrl}/weather`, data, { params });
  }
  deleteWeatherData(city: string): Observable<any> {
    const params = new HttpParams()
      .set('q', city)
      .set('appid', this.apikey);
  
    return this.http.delete<any>(`${this.ApiUrl}/weather`, { params });
  }
  getWeathers(): Observable<any> {
    const city = this.route.snapshot.paramMap.get('city');
    const params = new HttpParams().set('appid', this.apikey);
  
    return this.http.get<any>(`${this.ApiUrl}/weather/${city}`, { params });
  }
  
  updateWeathersData(data: any): Observable<any> {
    const city = this.route.snapshot.paramMap.get('city');
    const params = new HttpParams().set('appid', this.apikey);
  
    return this.http.put<any>(`${this.ApiUrl}/weather/${city}`, data, { params });
  }
  
  deleteWeathersData(): Observable<any> {
    const city = this.route.snapshot.paramMap.get('city');
    const params = new HttpParams().set('appid', this.apikey);
  
    return this.http.delete<any>(`${this.ApiUrl}/weather/${city}`, { params });
  }
  
  addWeatherData(data: any): Observable<any> {
    const city = this.route.snapshot.paramMap.get('city');
    const params = new HttpParams().set('appid', this.apikey);
  
    return this.http.post<any>(`${this.ApiUrl}/weather/${city}`, data, { params });
  }
  
}
