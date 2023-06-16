import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Models/order/Order';
import { OrderService } from 'src/app/Services/order/order.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  orders: Order[] = [];
  isLoginPage = true;

  constructor(private orderService: OrderService) {
    this.isLoginPage = this.isLoginPage;
  }

  ngOnInit(): void {
    this.GetAll();
  }

  GetAll(): void {
    this.orderService.GetAllOrders().subscribe((result: any) => {
      this.orders = result;
      console.log(this.orders);
    });
  }

}
