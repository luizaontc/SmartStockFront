import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/User/User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://localhost:7287/api/user';

  constructor(private http: HttpClient) { }
    
    GetAllUsers(): Observable<User[]>{

      return this.http.get<User[]>(this.url);
    } 

    GetUserById(userId: number): Observable<User>{

      const apiUrl = `${this.url}/${userId}`
      return this.http.get<User>(apiUrl);
    } 

    NewUser(user: User): Observable<any>{

      return this.http.post<User>(this.url, user, httpOptions);
    } 

    UpdateUser(user: User): Observable<any>{

      return this.http.put<User>(this.url, user, httpOptions);
    } 

    DeleteUser(userId: number): Observable<any>{
      const apiUrl = `${this.url}/${userId}`;

      return this.http.delete<number>(apiUrl, httpOptions);
    } 

    
}
