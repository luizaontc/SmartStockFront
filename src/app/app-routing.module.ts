import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [{

  path:'',
  component:LoginComponent,
  children:[
  { path: '', component: LoginComponent },
  { path: 'user', component: UserComponent }
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
