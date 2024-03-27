import React from "react";
import { View, Text } from "react-native";

export const ProductInfo: React.FC<{
  price: string;
  amount: string;
  category: string;
}> = ({ price, amount, category }) => {
  return (
    <>
      <Text className="text-1xl font-bold">{category}</Text>
      <View className="flex flex-col items-start">
        <Text className="text-1xl font-bold">Preço: R${price}</Text>
        <Text className="text-1xl font-bold">Quantidade: {amount}</Text>
      </View>
    </>
  );
};
