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

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [HttpClientModule,UserService,AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
