import React from 'react';
import { Text, View } from 'react-native';

import * as T from './types';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
    Produtos: { item: ProductCardProps };
  };
  
  type ProductCardProps = {
    name: string;
    price: number;
    quantity: number;
    description: string;
  };
  
  type ProductScreenRouteProp = RouteProp<RootStackParamList, 'Produtos'>;
  
  type ProductScreenProps = {
    route: ProductScreenRouteProp;
  };

export const ProductScreen: React.FC<ProductScreenProps> = ({ route }) => {
  const { item } = route.params;

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl font-bold mb-4">{item.name}</Text>
      <Text className="text-xl">Descrição: {item.description}</Text>
      <Text className="text-xl">Preço: R${item.price}</Text>
      <Text className="text-xl">Quantidade Disponível: {item.quantity}</Text>
    </View>
  );
};
