import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { EmsService } from '../ems.service';

@Component({
  selector: 'app-empoloyeereg-rf',
  templateUrl: './empoloyeereg-rf.component.html',
  styleUrls: ['./empoloyeereg-rf.component.css']
})
export class EmpoloyeeregRfComponent implements OnInit {

  departments : string[] = ["Accounting", "Finance", "IT", "HR"]
  form : FormGroup
  employeeObj = {}

  constructor(private router: Router, private emsService: EmsService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      empname: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      password: new FormGroup({
        emppassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
        empcpassword: new FormControl('', [Validators.required, Validators.minLength(8)])
      }),
      email: new FormControl('', [Validators.required, Validators.email]),
      empdept: new FormControl(this.departments[1]),
      consent: new FormControl(false, Validators.requiredTrue)
    })    
  }

  register() {
    console.log(this.form.value)
    this.employeeObj = {
      "id": this.getNewEmployeeId(),
      "name": this.form.value.empname,
      "password": this.form.value.password.emppassword,
      "email": this.form.value.email,
      "department": this.form.value.empdept,
      "consent": this.form.value.consent
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

  hasErrorConsent() {
    return (this.form.get('consent').touched || this.form.get('consent').dirty) && this.form.get('consent').hasError('required')
  }
}
