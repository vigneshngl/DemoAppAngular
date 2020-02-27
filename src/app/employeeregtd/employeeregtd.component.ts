import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmsService } from '../ems.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeeregtd',
  templateUrl: './employeeregtd.component.html',
  styleUrls: ['./employeeregtd.component.css']
})
export class EmployeeregtdComponent implements OnInit {

  departments = ["IT", "Accounting", "Health"]
  employee : Employee
  allUsers : Employee[]
  employeeObj = {}

  constructor(private emsService : EmsService, private router : Router) { }

  ngOnInit(): void {
    this.employee = new Employee({
      empName: "",
      password: {
        empPswd: "",
        empCPswd: ""
      },
      empEmail: "",
      empDepartment: this.departments[1],
      consent: false
    })
  }

  employeeRegistration(signupform) {
    this.employeeObj = {
      "id": this.getNewEmployeeId(),
      "name": signupform.value.empName,
      "password": signupform.value.password.empPswd,
      "email": signupform.value.empEmail,
      "department": signupform.value.empDepartment,
      "consent": signupform.value.consent
    }

    this.emsService.addDataToEMS("http://localhost:3000/employees", this.employeeObj)
      .subscribe((data) => {
        alert("Employee registered successfully")
        this.router.navigate(["/ems"])
      })
  }

  private getNewEmployeeId() {
    return Math.floor(Math.random() * 1000)
  }
}
