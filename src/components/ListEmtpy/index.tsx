import { Skeleton } from "native-base";
import { ListEmptyProps } from "./types";
import { View, Text } from "react-native";

import { CartEmpty } from "./components/CartEmpty";
import { ProductEmpty } from "./components/ProductEmpty";
import { HistoricEmpty } from "./components/HistoricEmpty";

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

  if (isHistory) return <HistoricEmpty />;
};
