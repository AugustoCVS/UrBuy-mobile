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
      label: "Tipo:",
      value: category,
    },
    {
      id: 1,
      label: "Preço:",
      value: price,
    },
    {
      id: 2,
      label: "Qtd. Disponível:",
      value: amount,
    },
  ];
};