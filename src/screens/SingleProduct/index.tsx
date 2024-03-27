import React from "react";
import { Image, View } from "react-native";

import { useProductCard } from "./hook";
import { ScrollView } from "react-native-gesture-handler";

import { ButtonProduct } from "./components/Button";
import { ProductInfoList } from "./components/ProductInfoList";
import { ProductAdditionalInfoList } from "./components/ProductAdditionalInfoList";

export const ProductScreen: React.FC = () => {
  const { states } = useProductCard();

  return (
    <View className="flex-1 items-center bg-white p-4 justify-between">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{ uri: states.product.img[1] }} height={180} className="w-full" />

        <View className=" py-8 rounded-lg shadow-md w-full mt-8 border border-gray-400">
          <ProductInfoList
            productName={states.product.name}
            productInfo={states.productInfo}
          />

          <ProductAdditionalInfoList
            productAdditionalInfo={states.productAdditionalInfo}
          />
        </View>

        <ButtonProduct onPress={() => {}} />
      </ScrollView>
    </View>
  );
};
