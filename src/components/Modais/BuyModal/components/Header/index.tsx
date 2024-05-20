import { HeaderProps } from "./types";

import { AntDesign } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

export const Header: React.FC<HeaderProps> = ({ onClose }) => {
  return (
    <View className="flex justify-center items-center mt-4">
      <Text className="text-blue-100 font-bold text-2xl">Compra</Text>

      <Pressable onPress={onClose} className="absolute right-4 top-1">
        <AntDesign name="close" size={26} color="black" />
      </Pressable>
    </View>
  );
};
