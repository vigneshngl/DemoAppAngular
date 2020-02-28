import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

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
  dataSource = new MatTableDataSource(user_data)

  @ViewChild(MatSort, {static : true})
  sort : MatSort

  @ViewChild(MatPaginator, {static : true})
  paginator : MatPaginator

  constructor() { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
