import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ProductsTypesListProps } from "./types";
import { MaterialIcons } from "@expo/vector-icons";

export const ProductsTypesList: React.FC<ProductsTypesListProps> = ({
  onPress,
  category,
  styling,
  iconSize,
  iconColor,
}) => {
  const renderIcons: Record<string | number | symbol, string | JSX.Element> = {
    computer: <MaterialIcons name="computer" size={iconSize ? iconSize : 52} color={iconColor ? iconColor : "white"} />,
    keyboard: <MaterialIcons name="keyboard" size={iconSize ? iconSize : 52} color={iconColor ? iconColor : "white"} />,
    mouse: <MaterialIcons name="mouse" size={iconSize ? iconSize : 52} color={iconColor ? iconColor : "white"} />,
    monitor: <MaterialIcons name="monitor" size={iconSize ? iconSize : 52} color={iconColor ? iconColor : "white"} />,
    headset: <MaterialIcons name="headset" size={iconSize ? iconSize : 52} color={iconColor ? iconColor : "white"} />,
    smartphone: <MaterialIcons name="smartphone" size={iconSize ? iconSize : 52} color={iconColor ? iconColor : "white"} />,
    all: <Text className="text-white font-bold">Limpar</Text>
  };

  return (
    <TouchableOpacity
      className={styling ? styling : "w-20 h-20 rounded-full justify-center items-center shadow-sm shadow-gray-700 bg-blue-100"}
      onPress={onPress}
      delayLongPress={1}
    >
      <Text> {renderIcons[category]} </Text>
    </TouchableOpacity>
  );
};
