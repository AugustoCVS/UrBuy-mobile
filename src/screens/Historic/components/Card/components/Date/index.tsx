import { Text, View } from "react-native";

export const Date: React.FC<{ date: string }> = ({ date }) => {
  return (
    <View className="w-full p-1">
      <Text className="text-gray-600 text-base">{date}</Text>
    </View>
  );
};
