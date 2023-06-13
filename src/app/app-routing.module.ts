import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './account/shared/auth.guard';

const routes: Routes = [
  {
    path:'',
    component: UserComponent,
    children: [
      {path: '',component: UserComponent},
      {path: 'user',component: UserComponent}
    ],
    canActivate:[AuthGuard]
  },
  {
    path: '',
    component: LoginComponent, 
    children: [
      { path: 'login', component: LoginComponent }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
