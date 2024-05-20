import { api } from "./api";
import {
  IPurchase,
  HistoricRequest,
  PurchaseRequest,
} from "./interfaces/purchase";

export const PurchaseService = {
  getAllPurchases: async ({ userId, name = "", price }: HistoricRequest) => {
    const queryPrice = price ? `&price=${price}` : "";

    const res = await api.get<IPurchase[]>(
      `/purchase/list/user/${userId}?name=${name}${queryPrice}`
    );

    return res.data;
  },

  purchaseProduct: async (
    { amount, category, date, name, price }: PurchaseRequest,
    { userId, productId }: { userId: number; productId: number }
  ) => {
    const res = await api.post<IPurchase>(`/purchase/register/${userId}/${productId}`, {
      name,
      date,
      price,
      category,
      amount,
    });

    return res.data;
  },
};
