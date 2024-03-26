import { ProductAdditionalInfoProps } from "./types";

export const ProductAdditionalInfoList = ({
  productAdditionalInfo,
}: {
  productAdditionalInfo: ProductAdditionalInfoProps;
}) => {
  const { brand, category, description } = productAdditionalInfo;

  return [
    {
      label: "Marca",
      value: brand,
    },
    {
      label: "Categoria",
      value: category,
    },
    {
      label: "Descrição",
      value: description,
    },
  ];
};