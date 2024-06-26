import { View } from "react-native";
import { SearchBarProps } from "./types";

import { Input } from "../Input";

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  onChangeValue,
  value,
  icon,
}) => {
  return (
    <View className="flex items-center justify-center mt-4">
      <Input
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeValue}
      />

      <View className="absolute right-4 top-3">
        {icon}
      </View>
    </View>
  );
};
