import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  breakfastMenu : string[] = ["Idly", "Dosa", "Poori", "Chappathi"]
  lunchMenu : string[] = ["Veg-meals", "Nonveg-meals", "Briyani"]
  menu : string[] = []
  isBreakfast : boolean = true
  selectedMenu : string = ""
  priceList : number[] = [12, 25, 20, 24, 60, 80, 100]

  menuClass : string
  priceCss : Object  = {}

  constructor() { }

  ngOnInit(): void {
  }

  setMenu(v : string) {
    if (v == 'b') {
      this.menu = this.breakfastMenu;
      this.menuClass = "breakfast"
    } else {
      this.menu = this.lunchMenu;
      this.menuClass = "lunch"
    }
    this.selectedMenu = ""
    this.setPriceColor()
  }

  setItem(v : string) {
    this.selectedMenu = v
  }

  setPriceColor() {
    this.priceCss = {
      'backgroud-color' : 'red'
    }
  }
  
  getRandomColor() {
    let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    let colorCode = '#'
    for (let i = 0; i < 6 ; i++) {
      colorCode += digits[Math.floor(Math.random()*16)]
    }
    return colorCode
  }
}
