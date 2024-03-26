import React from "react";
import { Text } from "react-native";
import { ProductInfoListProps } from "./types";
import { Info } from "../Info";

import * as U from "./utils";

export const ProductInfoList: React.FC<ProductInfoListProps> = ({
  productName,
  productInfo,
}) => {
  return (
    <>
      <Text className="text-3xl font-bold m-4 text-blue-100">{productName}</Text>

      {U.ProductInfoList({ productInfo: productInfo }).map(
        ({ label, value }) => (
          <Info key={value} label={label} value={value} />
        )
      )}
    </>
  );
};
