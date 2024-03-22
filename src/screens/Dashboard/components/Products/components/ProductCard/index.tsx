import React from 'react';
import { Text, View } from 'react-native';

import { Feather} from '@expo/vector-icons';

import { Button } from 'src/components/Button';
import { useProductCard } from './hook';

export const ProductScreen: React.FC = () => {
  const {states} = useProductCard();

  return (
    <View className="flex-1 items-center bg-gray-100 p-4 justify-between">
      <View className='bg-gray-600 h-52 w-full rounded-md' />


      <View className="bg-white p-8 rounded-lg shadow-md w-11/12">
        <Text className="text-3xl font-bold mb-4">{states.product.name}</Text>
        <Text className="text-lg mb-2">Descrição: {states.product.description}</Text>
        <Text className="text-lg mb-2">Preço: R${states.product.price}</Text>
        <Text className="text-lg mb-2">Quantidade Disponível: {states.product.quantity}</Text>

        <View className="mt-6">
          <Text className="text-xl font-bold mb-2">Informações Adicionais:</Text>
          <Text className="text-lg">Marca: XYZ</Text>
          <Text className="text-lg">Categoria: Eletrônicos</Text>
          <Text className="text-lg">Peso: 500g</Text>
        </View>
      </View>

      <View className="flex flex-row items-center justify-center mb-8">
        <Button className="h-14 w-3/4 flex flex-row items-center justify-center bg-green-100 rounded-md"
          
        >
          <Feather
            name="shopping-bag"
            size={14}
            color="white"
            style={{ padding: 4 }}
          />
          <Text className="text-lg text-white">Comprar</Text>
        </Button>
        </View>
    </View>
  );
};
