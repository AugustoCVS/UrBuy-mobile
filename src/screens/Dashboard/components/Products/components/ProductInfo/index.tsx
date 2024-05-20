import React from "react";
import { View, Text } from "react-native";
import { priceFormatter } from "src/utils/formaters";

export const ProductInfo: React.FC<{
  price: string;
  amount: string;
  category: string;
}> = ({ price, amount, category }) => {
  return (
    <>
      <Text className="text-1xl text-white font-bold">{category}</Text>
      <View className="flex flex-col items-start">
        <Text className="text-1xl text-white font-bold">
          Preço: {priceFormatter.format(Number(price))}
        </Text>
        <Text className="text-1xl text-white font-bold">
          Quantidade: {amount}
        </Text>
      </View>
    </>
  );
};
