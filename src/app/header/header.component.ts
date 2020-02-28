import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { Employee } from '../employee';

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

  constructor(private authService : AuthService, private dialog : MatDialog) { }

  login() {
    
    let loginEmployee = new Employee()
    
    const dialogRef = this.dialog.open(LoginDialogComponent, { width : '450px', data : { loginEmployee } })

    dialogRef.afterClosed().subscribe(result => {
      let employee = this.authService.login(result.email, result.password)
    })
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
