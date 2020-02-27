import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Planner } from '../planner';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css']
})
export class PlannerComponent implements OnInit {

  data: Planner[] = []

  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {

    this.apiservice.getTodaySchedule().subscribe(res => {
      this.data = res
    }, err => {
      console.log(err)
    })
  }

}
