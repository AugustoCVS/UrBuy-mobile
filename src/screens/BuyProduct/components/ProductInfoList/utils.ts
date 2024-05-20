import { ProductInfoProps } from "./types";

export const ProductInfoList = ({
  productInfo,
}: {
  productInfo: ProductInfoProps;
}) => {
  const { category, price, amount } = productInfo;

  return [
    {
      id: 0,
      label: "Categoria:",
      value: category,
    },
    {
      id: 1,
      label: "Total:",
      value: price,
    },
    {
      id: 2,
      label: "Qtd:",
      value: amount,
      isAmount: true,
    },
  ];
};