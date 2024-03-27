import React from "react";
import { View } from "react-native";
import { Image } from "react-native";
import { IMAGE_URL } from "./constants";

export const Banner: React.FC = () => {
  return (
    <View className="px-8 pt-8">
      <Image
        source={{ uri: IMAGE_URL }}
        height={200}
        style={{ borderRadius: 10 }}
      />
    </View>
  );
};
