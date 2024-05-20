import { Button } from "src/components/Button";

import { Text } from "react-native";
import { ButtonSectionsProps } from "./types";
import { Spinner } from "native-base";

export const ButtonSection: React.FC<ButtonSectionsProps> = ({
  handleUpdateUserInfo,
  loading,
}) => {
  return (
    <Button
      className="bg-green-100 w-72 h-12 rounded-lg flex items-center justify-center text-center"
      onPress={handleUpdateUserInfo}
    >
      <Text className="text-white text-lg">
        {loading ? <Spinner color="white" size="sm" /> : "Atualizar"}
      </Text>
    </Button>
  );
};
