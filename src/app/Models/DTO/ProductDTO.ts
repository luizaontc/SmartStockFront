export class ProductDTO{
    productName: string;
    quantity:number;

    constructor( productName: string,quantity:number) {
        this.productName = productName,
        this.quantity = quantity

    }
}