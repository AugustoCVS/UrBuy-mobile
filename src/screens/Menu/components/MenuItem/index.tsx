import { View, Text, Image } from "react-native";

export const MenuItem: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => {
  return (
    <View className="flex flex-row items-center mb-3">
      <Text className="text-lg font-bold">{label}:</Text>
      <Text className="text-lg pl-2">{value}</Text>
    </View>
  );
};
