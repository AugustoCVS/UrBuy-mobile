import React from "react";
import { View, Text } from "react-native";

export const ProductName: React.FC<{ name: string }> = ({ name }) => {
  return (
    <View className=" border-b border-b-gray-300">
      <Text className="text-2xl text-green-100">{name}</Text>
    </View>
  );
};
