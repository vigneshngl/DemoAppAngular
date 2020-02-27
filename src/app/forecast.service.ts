import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  weatherUrl = "http://localhost:3000/Weather"

  constructor(private httpClient : HttpClient) { }

  dailyforecast() {
    return this.httpClient.get(this.weatherUrl).pipe(map(result => result))
  }
}
