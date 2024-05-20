import React from "react";
import { View } from "react-native";
import { Info } from "./components/Info";
import { CardProps } from "./types";

export const Card: React.FC<CardProps> = ({
  amount,
  category,
  name,
  price,
  brand,
  description,
}) => {
  const total = price * amount;

  return (
    <View className="flex flex-col gap-1 w-full p-6">
      <Info
        amount={amount}
        category={category}
        name={name}
        price={price}
        total={total}
        brand={brand}
        description={description}
      />
    </View>
  );
};
