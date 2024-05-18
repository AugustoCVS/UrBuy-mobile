import { api } from "./api";
import { IPurchase, PurchaseRequest } from "./interfaces/purchase";

export const PurchaseService = {
  getAllPurchases: async ({ userId, name = "", price }: PurchaseRequest) => {
    const queryPrice = price ? `&price=${price}` : "";

    const res = await api.get<IPurchase[]>(
      `/purchase/list/user/${userId}?name=${name}${queryPrice}`
    );

    return res.data;
  },
};
