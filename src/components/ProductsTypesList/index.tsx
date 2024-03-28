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
    computer: <MaterialIcons name="computer" size={iconSize ? iconSize : 60} color={iconColor ? iconColor : "#749E50"} />,
    keyboard: <MaterialIcons name="keyboard" size={iconSize ? iconSize : 60} color={iconColor ? iconColor : "#749E50"} />,
    mouse: <MaterialIcons name="mouse" size={iconSize ? iconSize : 60} color={iconColor ? iconColor : "#749E50"} />,
    monitor: <MaterialIcons name="monitor" size={iconSize ? iconSize : 60} color={iconColor ? iconColor : "#749E50"} />,
    headset: <MaterialIcons name="headset" size={iconSize ? iconSize : 60} color={iconColor ? iconColor : "#749E50"} />,
    smartphone: <MaterialIcons name="smartphone" size={iconSize ? iconSize : 60} color={iconColor ? iconColor : "#749E50"} />,
    all: <MaterialIcons name="clear" size={iconSize ? iconSize : 60} color={iconColor ? iconColor : "#749E50"} />
  };

  return (
    <TouchableOpacity
      className={styling ? styling : "w-24 h-24 rounded-full justify-center items-center shadow-sm shadow-gray-700 bg-blue-100"}
      onPress={onPress}
      delayLongPress={1}
    >
      <Text> {renderIcons[category]} </Text>
    </TouchableOpacity>
  );
};
