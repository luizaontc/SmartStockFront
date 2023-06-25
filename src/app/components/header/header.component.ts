import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/account/shared/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isLoginPage = false;


  constructor(private accountService: AccountService) {  }

  ngOnInit(): void {
    this.isLoginPage = !this.accountService.isUserLoggedIn();
  }

  Logout() {
    localStorage.clear();
    window.location.href = '/login';
  }
}