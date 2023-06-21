import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Models/order/Order';
import { OrderDetail } from 'src/app/Models/order/OrderDetail';
import { OrderService } from 'src/app/Services/order/order.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  orders: Order[] = [];
  order?: Order;
  orderDetails: OrderDetail[] = [];
  isLoginPage = true;
  visibilityTable: boolean = true;
  totalOrders?: number;
  sumOrders?: number;
  initialDate?: string;
  endDate?: string;

  constructor(private orderService: OrderService) {
    this.isLoginPage = this.isLoginPage;
  }

  ngOnInit(): void {
    this.GetAll();
  }

  GetAll(): void {
    this.orderService.GetAllOrders().subscribe((result: any) => {
      this.orders = result;
      this.totalOrders = result.length;
      this.sumOrders = result.reduce((accumulator: number, order: any) => {
        const totalPrice = parseFloat(order.totalPrice);
        return accumulator + totalPrice;
      }, 0);
    });
  }

  BackToTable() {
    this.visibilityTable = true;
  }

  FilterDates() {
    // Use this.initialDate e this.endDate para acessar os valores nos campos de entrada
    if (this.initialDate == undefined || this.endDate == undefined || this.initialDate == null || this.endDate == null) {
      alert('Para filtrar é necessário colocar duas datas válidas.');
    } else if (this.endDate < this.initialDate) {
      alert('Data final tem que ser menor que a inicial.');
    } else {
      this.orderService
        .GetOrderByDate(this.initialDate, this.endDate)
        .subscribe((result: any) => {
          this.orders = result;
          this.totalOrders = result.length;
          this.sumOrders = result.reduce((accumulator: number, order: any) => {
            const totalPrice = parseFloat(order.totalPrice);
            return accumulator + totalPrice;
          }, 0);
        });
    }

    // Adicione o código lógico para filtrar as datas conforme necessário
  }

  GetOrderById(orderId: number) {
    this.orderService.GetOrderById(orderId).subscribe((result: any) => {
      console.log(result);
      result.status = 1;
      switch (result.status) {
        case 1:
          result.orderStatus = 'Pedido Orçado';
          result.orderColor = '00CED1';
          break;
        case 2:
          result.orderStatus = 'Pedido Retirado';
          result.orderColor = 'FFA500';
          break;
        case 3:
          result.orderStatus = 'Pedido Finalizado';
          result.orderColor = '32CD32';
          break;
        case 4:
          result.orderStatus = 'Pedido Cancelado';
          result.orderColor = 'FF4500';
          break;
        default:
          result.orderStatus = 'Status não identificado';
          result.orderColor = '#FF4500';
          break;
      }

      this.order = result;
      this.orderDetails = result.orderDetails;
      console.log(this.orderDetails);
      this.visibilityTable = false;
    });
  }

  GetOrderDetailById(orderId: number) {
    this.orderService.GetOrderDetailsById(orderId).subscribe((result: any) => {
      console.log(result);
      this.orderDetails = result;
    });
  }
}
