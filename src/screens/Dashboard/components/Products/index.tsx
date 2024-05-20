import React from "react";
import { View, TouchableOpacity } from "react-native";

import * as T from "./types";
import { ProductName } from "./components/ProductName";
import { ProductInfo } from "./components/ProductInfo";
import { ProductImage } from "./components/ProductImage";
import { ProductButton } from "./components/ProductButton";

export const Products: React.FC<T.ProductsProps> = ({
  id,
  category,
  name,
  price,
  amount,
  img,
  onPress,
  handleOpenModal,
}) => {
  return (
    <TouchableOpacity onPress={onPress} key={id}>
      <View className="w-[350px] h-[200px] bg-blue-100 shadow shadow-gray-700 rounded-xl flex flex-row items-center justify-center mt-4 p-4">
        <ProductImage uri={img} />

        <View className="flex-1 flex-col items-start justify-between h-full">
          <ProductName name={name} />

          <ProductInfo
            price={price.toString()}
            amount={amount.toString()}
            category={category}
          />

          <ProductButton onPress={handleOpenModal} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
