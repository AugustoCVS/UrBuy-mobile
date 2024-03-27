import React from "react";
import { Text,  } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Button } from "src/components/Button";

export const ProductButton: React.FC<{ onPress: () => void }> = ({ onPress }) => {
  return (
    <Button
      className="h-8 w-40 flex flex-row items-center justify-center bg-green-100 rounded-md"
      onPress={() => onPress()}
    >
      <Feather
        name="shopping-bag"
        size={14}
        color="white"
        style={{ padding: 4 }}
      />
      <Text className="text-lg text-white">Comprar</Text>
    </Button>
  );
};
