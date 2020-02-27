import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { EmsService } from '../ems.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  departments : string[] = ["Accounting", "Finance", "IT", "HR"]
  form : FormGroup
  employeeObj : any = []
  id : number

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private emsService: EmsService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => this.id = params["id"])

    this.emsService.getDataFromEMS(`http://localhost:3000/employees/${this.id}`)
    .subscribe(data => {
      this.employeeObj = data

      this.form = new FormGroup({
        empname: new FormControl(this.employeeObj.name, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
        password: new FormGroup({
          emppassword: new FormControl(this.employeeObj.password, [Validators.required, Validators.minLength(8)]),
          empcpassword: new FormControl(this.employeeObj.password, [Validators.required, Validators.minLength(8)])
        }),
        email: new FormControl(this.employeeObj.email, [Validators.required, Validators.email]),
        empdept: new FormControl(this.employeeObj.department),
        consent: new FormControl(this.employeeObj.consent, Validators.requiredTrue)
      })    
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

    this.emsService.updateDataToEMS(`http://localhost:3000/employees/${this.id}`, this.employeeObj)
    .toPromise().then((error) => {
      alert("Employee updated successfully")
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

