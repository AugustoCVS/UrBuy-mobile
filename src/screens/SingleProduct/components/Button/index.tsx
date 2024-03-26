import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

import { ButtonProductProps } from "./types";
import { Button } from "src/components/Button";

export const ButtonProduct: React.FC<ButtonProductProps> = ({
  onPress,
}) => {
  return (
    <View className="flex flex-row items-center justify-center my-8">
      <Button className="h-14 w-full flex flex-row items-center justify-center bg-green-100 rounded-md"
      onPress={onPress}
      >
        <Feather
          name="shopping-bag"
          size={14}
          color="white"
          style={{ padding: 4 }}
        />
        <Text className="text-lg text-white ml-4">Comprar</Text>
      </Button>
    </View>
  );
};
