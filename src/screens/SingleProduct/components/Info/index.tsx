import React, { useState } from "react";
import { Text, View } from "react-native";
import { InfoProps } from "./types";

export const Info: React.FC<InfoProps> = ({
  label,
  value,
}) => {
  const [numberOfLines, setNumberOfLines] = useState<number>(1);

  const minNumberOfLines = 1;
  const maxNumberOfLines = 10;

  const handleNumberOfLines = (): void => {
    if (numberOfLines === 1) return setNumberOfLines(maxNumberOfLines);

    setNumberOfLines(minNumberOfLines);
  };

  return (
    <View className="flex-row items-center px-4 mt-1">
      <Text className="text-lg flex-1">{label}</Text>
      <Text className="text-lg flex-1 text-right" numberOfLines={numberOfLines} onPress={handleNumberOfLines}>
        {value || "-"}
      </Text>
    </View>
  );
};
