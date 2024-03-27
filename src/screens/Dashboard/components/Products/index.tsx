import React from "react";
import { View, TouchableOpacity } from "react-native";

import * as T from "./types";
import { useProducts } from "./hook";
import { ProductName } from "./components/ProductName";
import { ProductInfo } from "./components/ProductInfo";
import { ProductImage } from "./components/ProductImage";
import { ProductButton } from "./components/ProductButton";

export const Products: React.FC<T.ProductsProps> = ({
  category,
  name,
  price,
  amount,
  img,
  onPress,
}) => {
  const { actions } = useProducts();

  return (
    <TouchableOpacity onPress={onPress}>
      <View className="w-[350px] h-[200px] bg-blue-200 shadow-2xl rounded-xl flex flex-row items-center justify-center mt-4 p-4">
        <ProductImage uri={img} />

        <View className="flex-1 flex-col items-start justify-between h-full">
          <ProductName name={name} />

          <ProductInfo
            price={price.toString()}
            amount={amount.toString()}
            category={category}
          />

          <ProductButton onPress={() => actions.featureInDevelopment()} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
