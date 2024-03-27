import React from "react";
import { View, FlatList, ScrollView } from "react-native";

import { DashBoardHeader } from "./components/Header";
import { Products } from "./components/Products";

import { useDashboard } from "./hook";
import { ProductsTypesList } from "./components/ProductsTypesList";

import * as U from "./utils";
import { Banner } from "./components/Banner";

export const Dashboard: React.FC = () => {
  const { actions } = useDashboard();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1, backgroundColor: "white" }}
    >
      <DashBoardHeader name="Augusto" />

      <Banner />

      <View className="justify-center items-center pt-4 px-4">
        <FlatList
          data={U.TypesList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <ProductsTypesList
              key={index}
              category={item.category}
              onPress={() =>
                actions.handleNavigateToProductList(item.category)
              }
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 28, padding: 8 }}
        />
      </View>

      <View className="flex-1 justify-center items-center pb-4">
        {U.ProductList.map((product) => (
          <Products
            key={product.id}
            category={product.category}
            name={product.name}
            price={product.price}
            amount={product.amount}
            img={product.img[0]}
            onPress={() =>
              actions.handleNavigateToProduct({ product: product })
            }
          />
        ))}
      </View>
    </ScrollView>
  );
};
