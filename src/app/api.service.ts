import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Planner } from './planner';
import { tap, catchError } from 'rxjs/operators';

const apiURL = "http://localhost:3000/TodoList"
const httpOptions = { headers : new HttpHeaders({'Content-Type':'application/json'}) }


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private httpClient : HttpClient) { }

  getTodaySchedule() : Observable<Planner[]> {
    return this.httpClient.get<Planner[]>(apiURL, httpOptions).pipe(
      tap(todo => { console.log('Fetched the schedule from todoList') }),
      catchError(this.handleError('getTodaySchedule', []))
    )
  }

  private handleError<T>(operation='operation', result?:T) {
    return (error: any) : Observable<T> => {
      console.error(error)
      return of(result as T)
    }
  }
}
