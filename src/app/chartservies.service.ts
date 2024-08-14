import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartserviesService {
  public baseUrl = 'https://swisscastledevapi.onpremise.snadhr.com/wp-json/wc/v3/reports/sales';

  constructor(public http:HttpClient) { }

loadsales(){
return this.http.get('http://localhost:3000/sales')
}


  getSalesData(dateMin: string, dateMax: string): Observable<any> {
    const params = new HttpParams()
      .set('date_min', dateMin)
      .set('date_max', dateMax)
      .set('consumer_key', 'ck_2e17575481e4ac5ded12046b9b2310625814ba3a')
      .set('consumer_secret', 'cs_dc5353c0d8a6990157661a5fc003c30831d02277');
 
    return this.http.get<any>(this.baseUrl, { params });
  }
 

}
