import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  restaurantTitle : string = "!!! My restaurant !!!";
  restaurantLogo : string = "../../assets/download.jpg";
  height : number = 150
  width : number = 150

  constructor() { }

  ngOnInit(): void {
  }

  setdata(v : string) {
    if (v === 'B') {
      this.restaurantTitle = "Raaga Banquet"
      this.restaurantLogo = "../../assets/banquet.jpg"
    } else {
      this.restaurantTitle = "Raaga Imperio"
      this.restaurantLogo = "../../assets/download.jpg"
    }
  }
}
