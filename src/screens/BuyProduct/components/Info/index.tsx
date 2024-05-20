import React, { useState } from "react";
import { Text, View } from "react-native";
import { InfoProps } from "./types";

import { AntDesign } from "@expo/vector-icons";

export const Info: React.FC<InfoProps> = ({
  label,
  value,
  isAmount,
  decreaseAmount,
  increaseAmount,
}) => {
  const [numberOfLines, setNumberOfLines] = useState<number>(1);

  const minNumberOfLines = 1;
  const maxNumberOfLines = 10;

  const handleNumberOfLines = (): void => {
    if (numberOfLines === 1) return setNumberOfLines(maxNumberOfLines);

    setNumberOfLines(minNumberOfLines);
  };

  if (isAmount) {
    return (
      <View className="w-full flex-row items-center justify-between px-4 mt-1">
        <Text className="text-lg flex-1 font-bold">{label}</Text>
        <View className="flex-row gap-2 items-center">
          <AntDesign
            name="minuscircleo"
            size={16}
            color="black"
            onPress={decreaseAmount}
          />

          <Text className="text-base">{value}</Text>

          <AntDesign
            name="pluscircleo"
            size={16}
            color="black"
            onPress={increaseAmount}
          />
        </View>
      </View>
    );
  }

  return (
    <View className="flex-row items-center px-4 mt-1">
      <Text className="text-lg flex-1 font-bold">{label}</Text>
      <Text
        className="text-lg flex-1 text-right"
        numberOfLines={numberOfLines}
        onPress={handleNumberOfLines}
      >
        {value || "-"}
      </Text>
    </View>
  );
};
