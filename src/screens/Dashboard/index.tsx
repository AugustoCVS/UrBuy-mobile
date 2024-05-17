import React from "react";
import { View, FlatList, ScrollView } from "react-native";

import { DashBoardHeader } from "./components/Header";
import { Products } from "./components/Products";

import { useDashboard } from "./hook";
import { ProductsTypesList } from "src/components/ProductsTypesList";

import * as U from "./utils";
import { Banner } from "./components/Banner";

export const Dashboard: React.FC = () => {
  const { states, actions } = useDashboard();

  console.log(states.products);

  return (
    <>
      <DashBoardHeader name="Augusto" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
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
            contentContainerStyle={{ gap: 50, padding: 8 }}
          />
        </View>

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
