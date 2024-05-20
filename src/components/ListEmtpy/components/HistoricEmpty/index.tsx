import { View, Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";

export const HistoricEmpty: React.FC = () => {
  return (
    <View className="w-full flex flex-col items-center justify-center gap-8 mt-24">
      <Ionicons name="book-outline" size={120} color="#BFBFBF" />
      <Text className="text-2xl font-bold text-gray-500">
        Nenhuma compra encontrada
      </Text>
    </View>
  );
};
