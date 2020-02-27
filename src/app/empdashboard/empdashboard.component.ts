import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empdashboard',
  templateUrl: './empdashboard.component.html',
  styleUrls: ['./empdashboard.component.css']
})
export class EmpdashboardComponent implements OnInit {

  employees : Employee[] = [
    new Employee("viki", "../../assets/viki.jpg", "Software"),
    new Employee("sandy", "../../assets/sandy.jpg", "HR"),
    new Employee("arul", "../../assets/arul.jpg", "Electrical")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

class Employee {
  name: string
  photo: string
  department: string

  constructor(name: string, photo: string, department: string) {
    this.name = name
    this.photo = photo
    this.department = department
  }
}