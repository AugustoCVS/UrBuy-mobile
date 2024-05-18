import React from "react";
import { View, Text, Image } from "react-native";
import { MenuItem } from "./components/MenuItem";
import { Header } from "./components/Header";
import { useMenu } from "./hook";

export const Menu: React.FC = () => {
  const { states } = useMenu();

  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <View className="bg-white p-8 rounded-lg shadow-md w-11/12">
        <Header name={states.userName} />

        <View className="border-t border-gray-300 pt-4">
          {states.userInfo.map((info) => (
            <MenuItem key={info.label} label={info.label} value={info.value} />
          ))}
        </View>
      </View>
    </View>
  );
};
