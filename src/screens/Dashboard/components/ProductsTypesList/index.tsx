import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ProductsTypesListProps } from "./types";
import { MaterialIcons } from "@expo/vector-icons";

export const ProductsTypesList: React.FC<ProductsTypesListProps> = ({
  onPress,
  category,
}) => {
  const renderIcons: Record<string | number | symbol, string | JSX.Element> = {
    computer: <MaterialIcons name="computer" size={60} color="#749E50" />,
    keyboard: <MaterialIcons name="keyboard" size={60} color="#749E50" />,
    mouse: <MaterialIcons name="mouse" size={60} color="#749E50" />,
    monitor: <MaterialIcons name="monitor" size={60} color="#749E50" />,
    headset: <MaterialIcons name="headset" size={60} color="#749E50" />,
    smartphone: <MaterialIcons name="smartphone" size={60} color="#749E50" />,
  };

  return (
    <TouchableOpacity
      className="w-24 h-24 bg-blue-200 rounded-full justify-center items-center shadow-md shadow-gray-600"
      onPress={onPress}
      delayLongPress={1}
    >
      <Text> {renderIcons[category]} </Text>
    </TouchableOpacity>
  );
};
