import { api } from "./api";
import { ProductRequest, ProductResponse } from "./interfaces/product";
export const ProductService = {
  getProducts: async ({ category, page = 0, size = 20 }: ProductRequest) => {
    const res = await api.get<ProductResponse>(
      `/product?category=${category}&page=${page}&size=${size}'`
    );

    return res.data;
  },
};
