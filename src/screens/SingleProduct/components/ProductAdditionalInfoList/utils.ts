import { ProductAdditionalInfoProps } from "./types";

export const ProductAdditionalInfoList = ({
  productAdditionalInfo,
}: {
  productAdditionalInfo: ProductAdditionalInfoProps;
}) => {
  const { brand, description } = productAdditionalInfo;

  return [
    {
      id: 0,
      label: "Marca",
      value: brand,
    },
    {
      id: 1,
      label: "Descrição",
      value: description,
    },
  ];
};