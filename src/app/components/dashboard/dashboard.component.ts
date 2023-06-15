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
    // Defina isLoginPage com base na lógica da página de login
    // Por exemplo, você pode verificar se o usuário está autenticado
    // e definir isLoginPage como false se estiver autenticado.
    // Caso contrário, defina como true.
    console.log(this.isLoginPage);

    this.GetAll();
  }

  GetAll(): void {
    this.orderService.GetAllOrders().subscribe((result: any) => {
      this.orders = result;
    });
  }

}
