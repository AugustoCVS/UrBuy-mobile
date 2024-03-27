import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { SearchBar } from "src/components/SearchBar";
import { useProducts } from "./hook";

export const ProductsAvailable: React.FC = () => {
  const { states, actions } = useProducts();

  const ICON = <AntDesign name="search1" size={24} color="#749E50" />;

  return (
    <View className={`flex mt-16 items-center h-full w-full`}>
      <SearchBar
        placeholder="Busque um produto"
        onChangeValue={actions.onChangeText}
        value={states.searchValue}
        icon={ICON}
      />
    </View>
  );
};
