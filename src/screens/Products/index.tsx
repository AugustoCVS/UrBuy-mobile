import React from "react";
import { Text, View } from "react-native";

import { useProducts } from "./hook";
import { Header } from "./components/Header";
import { FilterBar } from "./components/FilterBar";

export const ProductsAvailable: React.FC = () => {
  const { states, actions } = useProducts();

  return (
    <View className={`flex items-center h-full w-full`}>
      <Header onChangeText={actions.onChangeText} value={states.searchValue} />

      <FilterBar />
    </View>
  );
};
