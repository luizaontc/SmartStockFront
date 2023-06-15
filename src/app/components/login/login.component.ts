import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User/User';
import { LoginService } from 'src/app/Services/login/login.service';
import { FormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  isAuthenticated: boolean = false;
  formLogin: any;
  userLogin: any = 0;
  users: User[] = [];
  isLoginPage = true;

  constructor(private loginService : LoginService,private router: Router, private location: Location) {
  }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null),
    });

    if (localStorage.getItem('user_logged') != null){
      this.isAuthenticated = true;
      console.log(this.isAuthenticated);
    }
  }

  authenticate(){
    const username = this.formLogin.get('username').value;
    const password = this.formLogin.get('password').value;

    this.userLogin = {Username: username, Password: password}
    this.loginService.authenticate(this.userLogin).subscribe((data:any) => {
      if (data.user){
        localStorage.setItem('user_logged',JSON.stringify(data));
        this.isLoginPage = false;
        // this.router.navigate(['dashboard']);
        window.location.href = '/dashboard';
      }else{
        alert('Usuário inválido.')
      }
    }, error => {
      console.log("deu erro ")
      console.log(error);
      alert(error);
    })
  }

}
