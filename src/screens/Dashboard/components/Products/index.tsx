import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

import * as T from "./types";
import { Button } from "src/components/Button";
import { useProducts } from "./hook";

export const Products: React.FC<T.ProductsProps> = ({
  productType,
  name,
  price,
  quantity,
  img,
  onPress,
}) => {
  const { actions } = useProducts();

  return (
    <TouchableOpacity onPress={onPress}>
      <View className="w-[350px] border border-blue-100 rounded-xl flex flex-row items-center justify-center mt-4 p-4">
        <Image
          source={{ uri: img }}
          height={40}
          className="w-32 h-40 mr-4"
        />

        <View className="flex flex-col items-start gap-4">
          <View className=" border-b border-b-gray-300">
            <Text className="text-2xl">{name}</Text>
          </View>

          <Text className="text-1xl">{productType}</Text>

          <View className="flex flex-col items-start">
            <Text className="text-1xl">Preço: R${price}</Text>
            <Text className="text-1xl">Quantidade: {quantity}</Text>
          </View>

          <Button
            className="h-8 w-40 flex flex-row items-center justify-center bg-green-100 rounded-md"
            onPress={actions.featureInDevelopment}
          >
            <Feather
              name="shopping-bag"
              size={14}
              color="white"
              style={{ padding: 4 }}
            />
            <Text className="text-lg text-white">Comprar</Text>
          </Button>
        </View>
      </View>
    </TouchableOpacity>
  );
};
