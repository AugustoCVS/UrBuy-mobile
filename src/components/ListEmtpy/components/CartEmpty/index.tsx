import { View, Text } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export const CartEmpty: React.FC = () => {
  return (
    <View className="w-full flex flex-col items-center justify-center gap-8 mt-12">
      <MaterialCommunityIcons name="cart-remove" size={120} color="#BFBFBF" />
      <Text className="text-2xl font-bold text-gray-500">
        Seu carrinho está vazio
      </Text>
    </View>
  );
};
