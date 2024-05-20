import { Skeleton } from "native-base";
import { ListEmptyProps } from "./types";
import { View, Text } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CartEmpty } from "./components/CartEmpty";
import { ProductEmpty } from "./components/ProductEmpty";

export const ListEmpty: React.FC<ListEmptyProps> = ({
  loading,
  isSecondary,
  isCart,
  isHistory,
  isProduct,
}) => {
  if (loading) {
    return Array.from({ length: 5 }).map((_, index) => (
      <View className="w-full flex flex-col p-4">
        <Skeleton
          key={index}
          height={isSecondary ? 200 : 150}
          width="100%"
          borderRadius={8}
        />
      </View>
    ));
  }

  if (isCart) return <CartEmpty />;

  if (isProduct) return <ProductEmpty />;

  return (
    <View className="w-full flex flex-col items-center justify-center">
      <Text className="text-lg font-bold text-gray-500">
        Nenhum produto encontrado
      </Text>
    </View>
  );
};
