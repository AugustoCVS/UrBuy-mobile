import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { ProductsTypesList } from "src/components/ProductsTypesList";
import { InfoProps } from "./types";

export const Info: React.FC<InfoProps> = ({
  amount,
  category,
  name,
  price,
  total,
  brand,
  handleIncreaseAmount,
  handleDecreaseAmount,
}) => {
  return (
    <View className="flex flex-col shadow-sm shadow-gray-600 w-full bg-gray-100 rounded-md p-4">
      <View className="flex-row">
        <ProductsTypesList
          category={category}
          styling="w-16 h-16 rounded-xl justify-center items-center shadow-sm shadow-gray-700 bg-blue-100"
          iconColor="white"
          iconSize={40}
        />

        <View className="flex flex-row items-center justify-between pl-4 w-4/5">
          <View className="flex flex-col gap-1">
            <Text className="font-bold text-base">{name}</Text>
            <Text className="font-bold text-base">Marca: {brand}</Text>
            <Text className="text-base">Preço: R$ {price}</Text>

            <View className="flex-row gap-2 items-center">
              <AntDesign
                name="minuscircleo"
                size={16}
                color="black"
                onPress={handleDecreaseAmount}
              />
              <Text className="text-base">{amount}</Text>

              <AntDesign
                name="pluscircleo"
                size={16}
                color="black"
                onPress={handleIncreaseAmount}
              />
            </View>
          </View>
        </View>
      </View>

      <View className="w-full h-[1px] bg-gray-200 my-4" />

      <View className="flex flex-row justify-between">
        <Text className="text-base text-gray-600">Total:</Text>
        <Text className="text-base">R$ {total}</Text>
      </View>
    </View>
  );
};
