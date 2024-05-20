import { TouchableOpacity, View, Text } from "react-native";
import { SearchBar } from "src/components/SearchBar";

import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { HeaderProps } from "./types";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "src/routes/stack.routes";

export const Header: React.FC<HeaderProps> = ({ onChangeText, value }) => {
  const ICON = <AntDesign name="search1" size={24} color="#173042FC" />;

  const navigation = useNavigation<StackTypes>();

  const handleNavigateToCart = () => {
    navigation.navigate("Cart");
  };

  return (
    <View className="w-full h-40 bg-blue-100 flex flex-row items-center justify-center px-4 shadow-sm shadow-gray-600">
      <View className="mt-12 flex flex-row items-center">
        <SearchBar
          placeholder="Busque um produto"
          onChangeValue={onChangeText}
          value={value}
          icon={ICON}
        />

        <TouchableOpacity onPress={handleNavigateToCart}>
          <EvilIcons
            name="cart"
            size={36}
            color="white"
            style={{ paddingLeft: 8 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
