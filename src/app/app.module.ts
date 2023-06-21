import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http"
import { UserService } from './Services/User/user.service';
import { ReactiveFormsModule} from '@angular/forms';
import { ModalModule } from "ngx-bootstrap/modal";
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { httpInterceptorProviders } from './http-interceptors';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    DashboardComponent,
    ProductsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [HttpClientModule,UserService,AppRoutingModule,httpInterceptorProviders,Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
