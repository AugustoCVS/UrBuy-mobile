import { Button } from "src/components/Button";

import { Text, View } from "react-native";
import { ButtonSectionProps } from "./types";

export const ButtonSection: React.FC<ButtonSectionProps> = ({
  handleLogout,
  handleUpdateInfo,
}) => {
  return (
    <View className="w-full items-center p-4 flex-col gap-4">
      <Button
        onPress={handleUpdateInfo}
        className="bg-green-100 w-72 h-12 rounded-lg flex items-center justify-center text-center"
      >
        <Text className="text-white text-lg">Atualizar Informações</Text>
      </Button>

      <Button
        className="bg-gray-100 w-72 h-12 rounded-lg flex items-center justify-center text-center border border-green-100"
        onPress={handleLogout}
      >
        <Text className="text-green-100 text-lg">Sair</Text>
      </Button>
    </View>
  );
};
