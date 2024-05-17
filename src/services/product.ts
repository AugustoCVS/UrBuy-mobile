import { api } from "./api";
import { ProductRequest, ProductResponse } from "./interfaces/product";
export const ProductService = {
  getProducts: async ({ name, category, page = 0, size = 20 }: ProductRequest) => {
    const res = await api.get<ProductResponse>(
      `/product?category=${category}&name=${name}&page=${page}&size=${size}'`
    );

    return res.data;
  },
};
