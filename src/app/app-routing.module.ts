import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './account/shared/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
    children: [
      // {path: '',redirectTo:'dashboard',pathMatch:'full'},
      {path: '',component: DashboardComponent},
      {path: 'dashboard',component: DashboardComponent}
    ],
    canActivate:[AuthGuard] 
  },
  {
    path:'',
    component: ProductsComponent,
    children: [
      {path: '',redirectTo:'products',pathMatch:'full'},
      {path: 'products',component: ProductsComponent}
    ],
    canActivate:[AuthGuard]
  },
  {
    path:'',
    component: OrdersComponent,
    children: [
      {path: '',redirectTo:'newOrder',pathMatch:'full'},
      {path: 'newOrder',component: OrdersComponent}
    ],
    canActivate:[AuthGuard]
  },
  {
    path: '',
    component: LoginComponent, 
    children: [
      { path: 'login', component: LoginComponent }
    ],
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
