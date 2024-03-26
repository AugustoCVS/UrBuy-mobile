import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ProductsTypesListProps } from "./types";
import { MaterialIcons } from "@expo/vector-icons";

export const ProductsTypesList: React.FC<ProductsTypesListProps> = ({
  onPress,
  productType,
}) => {
  const renderIcons: Record<string | number | symbol, string | JSX.Element> = {
    computer: <MaterialIcons name="computer" size={60} color="#749E50" />,
    keyboard: <MaterialIcons name="keyboard" size={60} color="#749E50" />,
    mouse: <MaterialIcons name="mouse" size={60} color="#749E50" />,
    monitor: <MaterialIcons name="monitor" size={60} color="#749E50" />,
    headset: <MaterialIcons name="headset" size={60} color="#749E50" />,
    smartphone: <MaterialIcons name="smartphone" size={60} color="#749E50" />,
  };

  const renderNames: Record<string, string> = {
    computer: "PCs",
    keyboard: "Teclados",
    mouse: "Mouses",
    monitor: "Monitores",
    headset: "Headsets",
    smartphone: "Celulares",
  };

  return (
    <TouchableOpacity
      className="w-28 h-28 bg-blue-200 rounded-3xl justify-between items-center py-4 shadow-md shadow-gray-600"
      onPress={onPress}
      delayLongPress={1}
    >
      <Text> {renderIcons[productType]} </Text>
      <Text className="text-blue-100 font-bold"> {renderNames[productType]} </Text>
    </TouchableOpacity>
  );
};
