import { TouchableOpacity, View } from "react-native";
import { SearchBar } from "src/components/SearchBar";

import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { HeaderProps } from "./types";

export const Header: React.FC<HeaderProps> = ({ onChangeText, value }) => {
  const ICON = <AntDesign name="search1" size={24} color="#749E50" />;

  return (
    <View className="flex flex-row items-center justify-center">
      <SearchBar
        placeholder="Busque um produto"
        onChangeValue={onChangeText}
        value={value}
        icon={ICON}
      />

      <TouchableOpacity>
        <EvilIcons
          name="cart"
          size={36}
          color="#173042FC"
          style={{ paddingLeft: 8 }}
        />
      </TouchableOpacity>
    </View>
  );
};
