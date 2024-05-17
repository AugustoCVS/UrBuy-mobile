import React from "react";
import { ScrollView, Text, View } from "react-native";

import { useProducts } from "./hook";
import { Header } from "./components/Header";
import { FilterBar } from "./components/FilterBar";
import * as U from "./utils";
import { Products } from "../Dashboard/components/Products";

export const ProductsAvailable: React.FC = () => {
  const { states, actions } = useProducts();

  return (
    <>
      <Header onChangeText={actions.onChangeText} value={states.searchValue} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center", width: "100%" }}
      >
        <FilterBar />

        <View className="flex-1 justify-center items-center pb-4">
          {states.products.map((product) => (
            <Products
              key={product.id}
              id={product.id}
              category={product.category}
              name={product.name}
              price={product.price}
              amount={product.amount}
              img={product.img}
              onPress={() =>
                actions.handleNavigateToProduct({ product: product })
              }
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};
