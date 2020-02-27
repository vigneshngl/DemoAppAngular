import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EmployeeregtdComponent } from './employeeregtd/employeeregtd.component';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users : Employee[] = []

  constructor() { }

  addUser(newEmployee: Employee) {
    this.users.push(newEmployee)
  }

  getAllUsers() {
    return this.users
  }
}
