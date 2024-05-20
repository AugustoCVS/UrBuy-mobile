import { Button } from "src/components/Button";

import { Text, View } from "react-native";

export const ButtonSection: React.FC<{ onPress: () => void }> = ({
  onPress,
}) => {
  return (
    <View className="w-full items-center p-4 flex-col gap-4">
      <Button
        onPress={onPress}
        className="bg-green-100 w-72 h-12 rounded-lg flex items-center justify-center text-center"
      >
        <Text className="text-white text-lg">Atualizar Informações</Text>
      </Button>

      <Button className="bg-green-100 w-72 h-12 rounded-lg flex items-center justify-center text-center">
        <Text className="text-white text-lg">Cadastrar Endereço</Text>
      </Button>
    </View>
  );
};
