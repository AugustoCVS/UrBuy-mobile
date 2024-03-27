import React from "react";
import { View, Text } from "react-native";

import { ProductAdditionalInfoListProps } from "./types";
import { Info } from "../Info";
import * as U from "./utils";

export const ProductAdditionalInfoList: React.FC<
  ProductAdditionalInfoListProps
> = ({ productAdditionalInfo }) => {
  return (
    <View className="mt-6">
      <View className="bg-gray-100">
        <Text className="text-xl font-bold m-2 text-blue-100">
          Informações Adicionais
        </Text>
      </View>
      {U.ProductAdditionalInfoList({
        productAdditionalInfo: productAdditionalInfo,
      }).map(({ id, label, value }) => (
        <Info key={id} label={label} value={value} />
      ))}
    </View>
  );
};
