import React from "react";
import { Text, View } from "react-native";

import { Feather } from "@expo/vector-icons";

import { Button } from "src/components/Button";
import { useProductCard } from "./hook";
import { ScrollView } from "react-native-gesture-handler";

export const ProductScreen: React.FC = () => {
  const { states } = useProductCard();

  return (
    <View className="flex-1 items-center bg-gray-100 p-4 justify-between">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="bg-gray-600 h-52 w-full rounded-md" />

        <View className="bg-white p-8 rounded-lg shadow-md w-full mt-8">
          <Text className="text-3xl font-bold mb-4">{states.product.name}</Text>
          <Text className="text-lg mb-2">
            Tipo: {states.product.productType}
          </Text>
          <Text className="text-lg mb-2">Preço: R${states.product.price}</Text>
          <Text className="text-lg mb-2">
            Quantidade Disponível: {states.product.quantity}
          </Text>

          <View className="mt-6">
            <Text className="text-xl font-bold mb-2">
              Informações Adicionais:
            </Text>
            {states.product.additionalInfo && (
              <>
                <Text className="text-lg flex-1">
                  Marca: {states.product.additionalInfo?.brand || "-"}
                </Text>
                <Text className="text-lg flex-1">
                  Categoria: {states.product.additionalInfo?.category || "-"}
                </Text>
                <Text className="text-lg flex-1">
                  Descrição: {states.product.additionalInfo?.description || "-"}
                </Text>
              </>
            )}
          </View>
        </View>

        <View className="flex flex-row items-center justify-center my-8">
          <Button className="h-14 w-full flex flex-row items-center justify-center bg-green-100 rounded-md">
            <Feather
              name="shopping-bag"
              size={14}
              color="white"
              style={{ padding: 4 }}
            />
            <Text className="text-lg text-white ml-4">Comprar</Text>
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};
