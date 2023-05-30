import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/Models/User/User';
import { UserService } from 'src/app/Services/User/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  
  form: any;
  formTitle: string = "";
  users?: User[];

  visibilityTable: boolean=true;
  visibilityForm: boolean=false;

  constructor(private userService : UserService){}

  ngOnInit(): void {

    this.userService.GetAllUsers().subscribe(result => {
      this.users = result
    })
  }

  SendForm(): void{
    const user: User = this.form.value;

    this.userService.NewUser(user).subscribe((result) => 
      {
        this.visibilityForm = false;
        this.visibilityTable = true; 
        alert('Usuário inserido com sucesso');
        this.userService.GetAllUsers().subscribe((result2)=>{
          this.users = result2
        })
      });
  }

  ShowUserForm(): void{
    this.visibilityTable = false;
    this.visibilityForm = true;

    this.formTitle = "Novo Usuário"
    this.form = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null),
      document: new FormControl(null),
      email: new FormControl(null),
      name: new FormControl(null)
    });
  }

  Back():void{
    this.visibilityTable = true;
    this.visibilityForm = false;
  }
}
