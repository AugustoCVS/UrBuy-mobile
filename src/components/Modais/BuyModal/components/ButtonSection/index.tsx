import { Button } from "src/components/Button";

import { View, Text } from "react-native";
import { ButtonSectionsProps } from "./types";

export const ButtonSection: React.FC<ButtonSectionsProps> = ({
  handleNavigateToBuyScreen,
  addToCart,
}) => {
  return (
    <View className="w-full items-center p-4 flex-col gap-4">
      <Button
        onPress={handleNavigateToBuyScreen}
        className="bg-green-100 w-72 h-12 rounded-lg flex items-center justify-center text-center"
      >
        <Text className="text-white text-lg">Comprar</Text>
      </Button>

      <Button
        className="bg-gray-100 w-72 h-12 rounded-lg flex items-center justify-center text-center border border-green-100"
        onPress={addToCart}
      >
        <Text className="text-green-100 text-lg">Adicionar ao carrinho</Text>
      </Button>
    </View>
  );
};
