import React from "react";
import { ScrollView } from "react-native";
import { Header } from "./components/Header";
import { useHistoric } from "./hook";
import { Card } from "./components/Card";

export const HistoricScreen: React.FC = () => {
  const { states, actions } = useHistoric();

  return (
    <>
      <Header value={states.searchValue} onChangeText={actions.onChangeText} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center", width: "100%" }}
      >
        {states.purchases.map((item) => {
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
        })}
      </ScrollView>
    </>
  );
};
