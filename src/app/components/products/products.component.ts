import { Component } from '@angular/core';
import { Product } from 'src/app/Models/product/Product';
import { ProductsService } from 'src/app/Services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products : Product[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.GetAll()
  }

  GetAll(): void {
    this.productService.GetAllProducts().subscribe((result: any) => {
      this.products = result;
    });
  }
}
