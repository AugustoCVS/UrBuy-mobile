import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import { DashBoardHeader } from "./components/Header";
import { Products } from "./components/Products";
import productList from "./utils";
import { StackTypes } from "src/routes/stack";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});

export const Dashboard: React.FC = () => {
    const navigation = useNavigation<StackTypes>();

  return (
    <>
      <DashBoardHeader name="Augusto" type="Comprador" />
      <View style={styles.container}>
        <FlatList
          data={productList}
          keyExtractor={(product) => product.name}
          renderItem={({ item }) => (
            <Products
              description={item.description}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            onPress={() => navigation.navigate("Produtos", { item })}
            />
          )}
          contentContainerStyle={{ alignItems: "center" }}
        />
      </View>
    </>
  );
};
