import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

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

  constructor(private authService : AuthService) { }

  login() {
    let email = "vignesh@test.com"
    let password = "viki123"
    let employee = this.authService.login(email, password);
    console.log(employee)
  }

  logout() {
    this.authService.logout();
  }

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
