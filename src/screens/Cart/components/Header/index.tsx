import { View, Text } from "react-native";
import { Spinner } from "native-base";
import { Feather } from "@expo/vector-icons";

import { Button } from "src/components/Button";
import { priceFormatter } from "src/utils/formaters";
import { HeaderProps } from "./types";

export const Header: React.FC<HeaderProps> = ({
  loading,
  onPress,
  total,
  isEmpty,
}) => {
  return (
    <View className="px-6">
      <View className="w-full flex-row pt-8 items-center justify-between">
        <Text className="text-lg">Total:</Text>
        <Text className="text-lg">{priceFormatter.format(total)}</Text>
      </View>

      <View className="flex flex-row items-center justify-center my-8">
        <Button
          className="h-14 w-full flex flex-row items-center justify-center bg-green-100 rounded-md"
          onPress={onPress}
          disabled={loading || isEmpty}
        >
          {loading ? (
            <Spinner color="white" />
          ) : (
            <>
              <Feather
                name="shopping-bag"
                size={14}
                color="white"
                style={{ padding: 4 }}
              />
              <Text className="text-lg text-white ml-4">Comprar</Text>
            </>
          )}
        </Button>
      </View>
    </View>
  );
};
