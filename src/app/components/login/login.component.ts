import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User/User';
import { LoginService } from 'src/app/Services/Login/login.service';
import { FormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

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

  constructor(private loginService : LoginService) {
  }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null),
    });

    
    console.log("teste2")
    if (localStorage.getItem('user_logged') != null){
      this.isAuthenticated == true;
      console.log("teste");
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
      }else{
        alert('Usuário inválido.')
      }
    }, error => {
      console.log(error);
      alert(error.errox);
    })
  }

}
