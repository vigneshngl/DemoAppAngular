import { Component, OnInit } from '@angular/core';
import { EmsService } from '../ems.service';

@Component({
  selector: 'app-ems',
  templateUrl: './ems.component.html',
  styleUrls: ['./ems.component.css']
})
export class EmsComponent implements OnInit {

  employeeData : any = []

  constructor(private emsService: EmsService) { }

  ngOnInit(): void {
    this.getDataFromEMSService()
  }

  getDataFromEMSService() {
    this.emsService.getDataFromEMS("http://localhost:3000/employees")
      .subscribe((data) => {
        this.employeeData = data
      })
  }

  removeEmployee(id) {
    if (confirm(`Are you sure to delete the employee (id : ${id})?`)) {
      this.emsService.deleteDataFromEMS(`http://localhost:3000/employees/${id}`)
      .toPromise().then((error) => {
        this.getDataFromEMSService()
      })
    }
  }

}