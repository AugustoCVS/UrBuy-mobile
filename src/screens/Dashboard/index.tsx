import React from "react";
import { View, FlatList, ScrollView, RefreshControl } from "react-native";

import { DashBoardHeader } from "./components/Header";
import { Products } from "./components/Products";

import { useDashboard } from "./hook";
import { ProductsTypesList } from "src/components/ProductsTypesList";

import * as U from "./utils";
import { Banner } from "./components/Banner";
import { BuyModal } from "src/components/Modais/BuyModal";
import { ListEmpty } from "src/components/ListEmtpy";

export const Dashboard: React.FC = () => {
  const { refs, states, actions } = useDashboard();

  return (
    <>
      <DashBoardHeader name={states.user?.name} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={
          <RefreshControl
            refreshing={states.loading}
            onRefresh={actions.handleRefresh}
          />
        }
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

        {states.loading && (
          <View className="flex items-center text-center">
            <ListEmpty loading={states.loading} isProduct={!states.products} />
          </View>
        )}

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
              handleOpenModal={() => actions.handleOpenBuyModal({ product })}
            />
          ))}
        </View>
      </ScrollView>

      <BuyModal modalRef={refs.buyModalRef} />
    </>
  );
};
