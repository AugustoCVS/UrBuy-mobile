import React from "react";
import { View, Text } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

import LogoMobile from "src/assets/svg/logoMobile.svg";

import * as T from "./types";
import { Button } from "src/components/Button";

export const DashBoardHeader: React.FC<T.HeaderProps> = ({ name, type }) => {
  return (
    <View className="w-full h-40 bg-blue-100 flex flex-row items-center justify-center px-4">
      <View className="w-full flex flex-row items-center pt-8 justify-between">
        <LogoMobile className="w-8 h-8" />
        <View className="flex flex-col items-start justify-between gap-4">
          <Text className="text-2xl text-white">{name}</Text>
        </View>

        <Button className="h-12 w-40 flex flex-row items-center justify-center bg-green-100  rounded-md">
          <EvilIcons name="cart" size={24} color="white" style={{ padding: 4 }} />
          <Text className="text-xl text-white">Carrinho</Text>
        </Button>
      </View>
    </View>
  );
};
