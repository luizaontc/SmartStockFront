export class Order {
  id: number;
  status: number;
  companyId: number;
  totalPrice: number;
  remetentAddress: string;
  recipientAddress: string;
  recipientComplement?: string;
  recipientPhoneNumber?: bigint;
  recipientEmail?: string;
  deletedDate?: Date;
  userDeletedId?: number;
  creationDate?: Date;
  userCreationId?: number;
  modifiedDate?: Date;
  userModifiedId?: number;
  orderCompletioDate?: Date;
  userCompletionId?: number;
  orderStatus?:string;
  orderColor?:string;

  constructor(
    id: number,
    status: number,
    companyId: number,
    totalPrice: number,
    remetentAddress: string,
    recipientAddress: string
  ) {
    this.id = id;
    this.status = status;
    this.companyId = companyId;
    this.totalPrice = totalPrice;
    this.remetentAddress = remetentAddress;
    this.recipientAddress = recipientAddress;
  }
}
