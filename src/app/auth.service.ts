import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedin : boolean
  empUrl = "http://localhost:3000/employees"

  constructor(private httpClient: HttpClient) { }

  private getEmployee(email: string, password: string) {
    let params = new HttpParams().set('email', email).set('password', password)
    return this.httpClient.get<Employee>(this.empUrl, {params})
  }

  login(email: string, password: string) {
    let employee : Employee

    this.getEmployee(email, password).subscribe(
      data => {employee = data
      if (employee === undefined) {
        this.isLoggedin = false
        return false
      } else {
        this.isLoggedin = true
        return employee
      }
    })    
  }

  logout() {
    this.isLoggedin = false
  }

  isLoggedIn() {
    return this.isLoggedin;
  }
}
