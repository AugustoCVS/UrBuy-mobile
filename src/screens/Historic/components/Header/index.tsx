import { View } from "react-native";
import { SearchBar } from "src/components/SearchBar";

import { AntDesign } from "@expo/vector-icons";
import { HeaderProps } from "./types";

export const Header: React.FC<HeaderProps> = ({ onChangeText, value }) => {
  const ICON = <AntDesign name="search1" size={24} color="#173042FC" />;

  return (
    <View className="w-full h-40 bg-blue-100 flex flex-row items-center justify-center px-4 shadow-sm shadow-gray-600">
      <View className="mt-12 flex flex-row items-center">
        <SearchBar
          placeholder="Nome, Preço ou Categoria"
          onChangeValue={onChangeText}
          value={value}
          icon={ICON}
        />
      </View>
    </View>
  );
};
