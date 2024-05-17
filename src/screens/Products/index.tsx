import React from "react";
import { FlatList } from "react-native";
import { Text, View } from "react-native";
import { useProducts } from "./hook";
import { Header } from "./components/Header";
import { FilterBar } from "./components/FilterBar";
import { Products } from "../Dashboard/components/Products";

export const ProductsAvailable: React.FC = () => {
  const { states, actions } = useProducts();

  return (
    <View className="w-full h-full">
      <Header onChangeText={actions.onChangeText} value={states.searchValue} />
      <FilterBar />

      <FlatList
        data={states.products}
        keyExtractor={(product) => product.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 16,
        }}
        renderItem={({ item }) => (
          <Products
            id={item.id}
            category={item.category}
            name={item.name}
            price={item.price}
            amount={item.amount}
            img={item.img}
            onPress={() => actions.handleNavigateToProduct({ product: item })}
          />
        )}
      />
    </View>
  );
};
