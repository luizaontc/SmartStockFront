import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { ProductDTO } from 'src/app/Models/DTO/ProductDTO';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  formOrder: any;
  order: any;
  products: FormArray;
  arProducts: ProductDTO[] = [];
  deleteProductEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(private formBuilder: FormBuilder) {
    this.products = this.formBuilder.array([]);
    this.formOrder = this.formBuilder.group({
      Products: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    this.formOrder = new FormGroup({
      RecipientPhoneNumber: new FormControl(null),
      RecipientAddress: new FormControl(null),
      RecipientComplement: new FormControl(null),
      RecipientEmail: new FormControl(null),
      RemetentAddress: new FormControl(null),
      Products: new FormArray([]),
    });
  }

  CreateOrder() {
    console.log('criando');
    const recipientPhoneNumber = this.formOrder.get(
      'RecipientPhoneNumber'
    ).value;
    const recipientAddress = this.formOrder.get('RecipientAddress').value;
    const recipientComplement = this.formOrder.get('RecipientComplement').value;
    const recipientEmail = this.formOrder.get('RecipientEmail').value;
    const remetentAddress = this.formOrder.get('RemetentAddress').value;
    const products = this.formOrder.get('Products') as FormArray;

    // Recuperar os valores do array Products
    const productsArray: { productName: any; quantity: any; }[] = [];
    products.controls.forEach((productFormGroup) => {
      if (productFormGroup instanceof FormGroup) {
        const productNameControl = productFormGroup.get('productName');
        const quantityControl = productFormGroup.get('quantity');

        if (productNameControl && quantityControl) {
          const productName = productNameControl.value;
          const quantity = quantityControl.value;

          // Criar um objeto para cada produto
          const product = {
            productName: productName,
            quantity: quantity,
          };

          // Adicionar o objeto ao array
          productsArray.push(product);
        }
      }
    });

    this.order = {
      RecipientPhoneNumber: recipientPhoneNumber,
      RecipientAddress: recipientAddress,
      RecipientComplement: recipientComplement,
      RecipientEmail: recipientEmail,
      RemetentAddress: remetentAddress,
      Products: productsArray,
    };
    console.log(this.order);
  }

  NewProduct() {
    console.log('novo produto');
    const productFormGroup = this.formBuilder.group({
      productName: [''],
      quantity: ['']
    });
  
    const products = this.formOrder.get('Products') as FormArray;
    products.push(productFormGroup);
  }

  RemoveProduct(index: number) {
    console.log('removendo ' + (index + 1));
    console.log(this.products);
  }
}
