import React from "react";
import { FlatList, View } from "react-native";
import { Header } from "./components/Header";
import { useHistoric } from "./hook";
import { Card } from "./components/Card";

export const HistoricScreen: React.FC = () => {
  const { states, actions } = useHistoric();

  return (
    <View className="w-full h-full">
      <Header value={states.searchValue} onChangeText={actions.onChangeText} />

      <FlatList
        data={states.purchases}
        keyExtractor={(product) => product.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          paddingBottom: 16,
        }}
        refreshing={states.loading}
        onRefresh={actions.handleRefresh}
        renderItem={({ item }) => {
          const total = item.price * item.amount;

          return (
            <Card
              key={item.id}
              amount={item.amount}
              category={item.category}
              date={item.date}
              name={item.name}
              price={item.price}
              total={total}
            />
          );
        }}
      />
    </View>
  );
};
