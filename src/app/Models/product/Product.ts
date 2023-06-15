export class Product{
    id: number;
    orderId: number;
    productName: string;
    quantity: number;
    price: string;
    companyId: string;
  
    constructor(
      id: number,
      orderId: number,
      productName: string,
      quantity: number,
      price: string,
      companyId: string
    ) {
      this.id = id;
      this.orderId = orderId;
      this.productName = productName;
      this.quantity = quantity;
      this.price = price;
      this.companyId = companyId;
    }
}