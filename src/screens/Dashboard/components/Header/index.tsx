import React from "react";
import { View, Text } from "react-native";

import LogoMobile from "src/assets/svg/logoMobile.svg";

import * as T from "./types";
import { Button } from "src/components/Button";

export const DashBoardHeader: React.FC<T.HeaderProps> = ({ name, type }) => {
  return (
    <View className="w-full h-40 bg-blue-100 flex flex-row items-center justify-center px-12">
      <View className="w-full flex flex-row items-center gap-4 p-4">
        <LogoMobile className="w-8 h-8" />
        <View className="flex flex-col items-start justify-between gap-4">
          <Text className="text-2xl text-white">{name}</Text>
          <Text className="text-2xl text-white">{type}</Text>
        </View>
      </View>

      <Button className="h-16 flex items-center justify-center p-4 bg-green-100 mr-4 rounded-md">
        <Text className="text-xl text-white">Comprar</Text>
      </Button>
    </View>
  );
};
