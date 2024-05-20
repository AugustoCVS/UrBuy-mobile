export interface HistoricRequest {
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

export interface PurchaseRequest {
  name: string;
  date: string;
  price: number;
  category: string;
  amount: number;
}


