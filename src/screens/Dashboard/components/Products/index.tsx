import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import * as T from './types';

export const Products: React.FC<T.ProductsProps> = ({
  description,
  name,
  price,
  quantity,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="w-[350px] h-44 border border-blue-100 rounded-xl flex flex-row items-center justify-center mt-4">
        <View className="w-32 h-32 bg-gray-600 mr-4" />

        <View className="flex flex-col items-start gap-4">
          <Text className="text-2xl">{name}</Text>

          <Text className="text-1xl">{description}</Text>

          <View className="flex flex-col items-start">
            <Text className="text-1xl">Preço: R${price}</Text>
            <Text className="text-1xl">Quantidade Disponível: {quantity}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
