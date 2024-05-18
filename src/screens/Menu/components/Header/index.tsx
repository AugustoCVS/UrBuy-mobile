import { Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { HeaderProps } from "./types";

export const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <View className="flex items-center mb-6">
      <View className="w-28 h-28 rounded-full bg-gray-600 flex items-center justify-center mb-8">
        <FontAwesome name="camera" size={40} color="white" />
      </View>
      <View>
        <Text className="text-xl font-bold">{name}</Text>
      </View>
    </View>
  );
};
