import React from "react";
import { Date } from "./components/Date";
import { View } from "react-native";
import { Info } from "./components/Info";
import { CardProps } from "./types";

export const Card: React.FC<CardProps> = ({
  amount,
  category,
  date,
  name,
  price,
}) => {
  return (
    <View className="flex flex-col gap-1 w-full p-6">
      <Date date={date} />
      <Info amount={amount} category={category} name={name} price={price} />
    </View>
  );
};
