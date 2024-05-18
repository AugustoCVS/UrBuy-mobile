export interface PurchaseRequest {
  userId: number;
  name?: string;
  price?: number;
}

export interface IPurchase {
  id: number;
  name: string;
  date: string;
  price: number;
  amount: number;
  category: string;
}