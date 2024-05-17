export interface MetaData {
  pageNumber: number;
  pageSize: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
}

export interface IProduct {
  id: 1;
  name: string;
  description: string;
  price: number;
  amount: number;
  img: string;
  brand: string;
  category: string;
}

export interface ProductRequest {
  category?: string;
  page?: number;
  size?: number;
}

export interface ProductResponse {
  pageable: MetaData,
  content: IProduct[]
}
