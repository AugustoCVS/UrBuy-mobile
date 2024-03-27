import React from "react";
import { View, Text } from "react-native";
import { AntDesign, EvilIcons } from "@expo/vector-icons";

import { SearchBar } from "src/components/SearchBar";
import { useProducts } from "./hook";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Header } from "./components/Header";

export const ProductsAvailable: React.FC = () => {
  const { states, actions } = useProducts();

  return (
    <View className={`flex mt-12 items-center h-full w-full`}>
      <Header onChangeText={actions.onChangeText} value={states.searchValue} />
    </View>
  );
};
