import React from "react";
import { Image } from "react-native";

export const ProductImage: React.FC<{ uri: string }> = ({ uri }) => {
  return (
    <Image
      source={{ uri: uri }}
      height={40}
      className="w-32 h-40 mr-4 rounded-xl"
    />
  );
};
