import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/Models/order/Order';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  GetAllOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(environment.urlApi + '/api/order/');
  } 

  GetOrderById(orderId:number): Observable<Order[]>{
    const apiUrl = `${environment.urlApi}/api/order/${orderId}`
    return this.http.get<Order[]>(apiUrl)
  }

  GetOrderDetailsById(orderId:number): Observable<Order[]>{
    const apiUrl = `${environment.urlApi}/details/${orderId}`
    return this.http.get<Order[]>(apiUrl)
  }

  GetOrderByDate(initialDateStr: string, endDateStr: string): Observable<Order[]> {
    const data = {
      initialDate: initialDateStr,
      endDate: endDateStr
    };

    const requestBody = {
      data: data
    };
    return this.http.post<Order[]>(environment.urlApi + '/api/order/date', data, httpOptions);
  }

}
