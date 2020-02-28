import { Component, OnInit } from '@angular/core';

const user_data = [
  { name : "Vignesh", country : "India", age : 32, city : "Trivandrum", isSingle: false },
  { name : "Arun", country : "India", age : 32, city : "Chennai", isSingle: false },
  { name : "Sriram", country : "India", age : 30, city : "Chennai", isSingle: false },
  { name : "Arul Murugan", country : "India", age : 32, city : "Bangalore", isSingle: true },
  { name : "Dinesh", country : "India", age : 28, city : "Bangalore", isSingle: true },
  { name : "Karthi", country : "India", age : 30, city : "Bangalore", isSingle: false },
  { name : "Mani", country : "India", age : 33, city : "Chennai", isSingle: false }
]

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {  

  displayedColumns = [ "name", "country", "age", "city", "isSingle" ]
  dataSource = user_data

  constructor() { }

  ngOnInit(): void {
  }

}
