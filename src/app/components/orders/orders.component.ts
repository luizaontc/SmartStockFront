import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{
  formOrder: any;
  deleteProductEvent: EventEmitter<number> = new EventEmitter<number>();
  
  ngOnInit(): void {
    this.formOrder = new FormGroup({
      RecipientPhoneNumber: new FormControl(null),
      RecipientAddress: new FormControl(null),
      CompanyId: new FormControl(null),
      RecipientComplement: new FormControl(null),
      RecipientEmail: new FormControl(null),
      RemetentAddress: new FormControl(null),
      Products: new FormArray([])
    });
  }

  CreateOrder(){
    console.log("criando");
  }

  NewProduct(){
    console.log("novo produto");
    const products = this.formOrder.get('Products') as FormArray;
    products.push(new FormControl(null));
  }

  RemoveProduct(index: number){
    console.log("removendo " + (index + 1));
  }

}
