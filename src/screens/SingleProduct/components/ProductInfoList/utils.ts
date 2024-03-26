import { ProductInfoProps } from "./types";

export const ProductInfoList = ({
  productInfo,
}: {
  productInfo: ProductInfoProps;
}) => {
  const { productType, price, quantity } = productInfo;

  return [
    {
      label: "Tipo:",
      value: productType,
    },
    {
      label: "Preço:",
      value: price,
    },
    {
      label: "Qtd. Disponível:",
      value: quantity,
    },
  ];
};