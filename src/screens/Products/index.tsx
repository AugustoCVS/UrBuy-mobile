import React from "react";
import { FlatList } from "react-native";
import { View } from "react-native";
import { useProducts } from "./hook";
import { Header } from "./components/Header";
import { FilterBar } from "./components/FilterBar";
import { Products } from "../Dashboard/components/Products";
import { BuyModal } from "src/components/Modais/BuyModal";

export const ProductsAvailable: React.FC = () => {
  const { refs, states, actions } = useProducts();

  return (
    <>
      <View className="w-full h-full">
        <Header
          onChangeText={actions.onChangeText}
          value={states.searchValue}
        />
        <FilterBar />

        <FlatList
          data={states.products}
          keyExtractor={(product) => product.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            paddingBottom: 16,
          }}
          refreshing={states.loading}
          onRefresh={actions.handleRefresh}
          renderItem={({ item }) => (
            <Products
              id={item.id}
              category={item.category}
              name={item.name}
              price={item.price}
              amount={item.amount}
              img={item.img}
              onPress={() => actions.handleNavigateToProduct({ product: item })}
              handleOpenModal={() =>
                actions.handleOpenBuyModal({ product: item })
              }
            />
          )}
        />
      </View>

      <BuyModal modalRef={refs.buyModalRef} />
    </>
  );
};
