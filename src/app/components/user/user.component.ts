import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { User } from 'src/app/Models/User/User';
import { UserService } from 'src/app/Services/User/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  form: any;
  formLogin: any;
  formTitle: string = '';
  users: User[] = [];
  userLogin: any = 0;
  nameUser: string = '';
  userId: number = 0;
  isAuthenticated: boolean = false;
  userLogged: any = {};

  visibilityTable: boolean = true;
  visibilityForm: boolean = false;

  modalRef: BsModalRef | undefined;

  constructor(
    private userService: UserService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null),
    });

    this.GetAll();
  }

  SendForm(): void {
    const user: User = this.form.value;

    console.log(user.id);

    if (user.id > 0) {
      this.userService.UpdateUser(user).subscribe((result) => {
        this.visibilityForm = false;
        this.visibilityTable = true;
        alert('Usuário atualizado com sucesso');
        this.userService.GetAllUsers().subscribe((result2) => {
          this.users = result2;
        });
      });
    } else {
      this.userService.NewUser(user).subscribe((result) => {
        this.visibilityForm = false;
        this.visibilityTable = true;
        alert('Usuário inserido com sucesso');
        this.userService.GetAllUsers().subscribe((result2) => {
          this.users = result2;
        });
      });
    }
  }

  GetAll(): void {
    this.userService.GetAllUsers().subscribe((result) => {
      this.users = result;
    });
  }

  UpdateUser(id: number): void {
    this.visibilityTable = false;
    this.visibilityForm = true;

    console.log(id);

    this.userService.GetUserById(id).subscribe((result) => {
      this.formTitle = `Atualizar  `;

      console.log(result);

      this.form = new FormGroup({
        id: new FormControl(result.id),
        username: new FormControl(result.username),
        password: new FormControl(result.password),
        document: new FormControl(result.document),
        email: new FormControl(result.email),
        name: new FormControl(result.name),
        creationDate: new FormControl(result.creationDate),
        userCreationId: new FormControl(result.userCreationId),
      });
    });
  }

  DeleteUser(id: number): void {
    this.userService.DeleteUser(id).subscribe((result) => {
      this.modalRef?.hide();
      alert('Usuário deletado com sucesso');
      this.userService.GetAllUsers().subscribe((result2) => {
        this.users = result2;
      });
    });
  }

  ShowUserForm(): void {
    this.visibilityTable = false;
    this.visibilityForm = true;

    this.formTitle = 'Novo Usuário';
    this.form = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null),
      document: new FormControl(null),
      email: new FormControl(null),
      name: new FormControl(null),
    });
  }

  ShowModal(id: number, name: string, conteudoModal: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(conteudoModal);
    this.userId = id;
    this.nameUser = name;
  }

  Back(): void {
    this.visibilityTable = true;
    this.visibilityForm = false;
  }

  // authenticate(){
  //   const username = this.formLogin.get('username').value;
  //   const password = this.formLogin.get('password').value;

  //   this.userLogin = {Username: username, Password: password}

  //   this.userService.authenticate(this.userLogin).subscribe((data:any) => {
  //     if (data.user){
  //       localStorage.setItem('user_logged',JSON.stringify(data));
  //       this.userService.GetAllUsers().subscribe(result => {
  //         this.users = result
  //       });
  //       this.getUserData();
  //     }else{
  //       alert('Usuário inválido.')
  //     }
  //   }, error => {
  //     console.log(error);
  //     alert(error.errox);
  //   })
  // }

  getUserData() {
    this.userLogged = JSON.parse(localStorage.getItem('user_logged') || 'null');
    this.isAuthenticated = this.userLogged !== null;
  }
}
