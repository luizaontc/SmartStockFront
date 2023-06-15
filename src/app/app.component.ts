import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SmartStockFront';
  isLoginPage: boolean = false;

  constructor(private router: Router) {    
  }

  Logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
