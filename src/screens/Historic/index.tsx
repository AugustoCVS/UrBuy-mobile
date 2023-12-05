import React from 'react';
import { View, Text } from 'react-native';

export const HistoricScreen: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <View className="bg-white p-8 rounded-lg shadow-md w-11/12">
        <Text className="text-3xl font-bold mb-4">Histórico de Pedidos</Text>
        
        <View className="border-t border-gray-300 pt-4">
          <Text className="text-lg mb-2">Pedido 1</Text>
          <Text className="text-lg mb-2">Pedido 2</Text>
          <Text className="text-lg mb-2">Pedido 3</Text>
          <Text className="text-lg mb-2">Pedido 1</Text>
          <Text className="text-lg mb-2">Pedido 2</Text>
          <Text className="text-lg mb-2">Pedido 3</Text>
          <Text className="text-lg mb-2">Pedido 1</Text>
          <Text className="text-lg mb-2">Pedido 2</Text>
          <Text className="text-lg mb-2">Pedido 3</Text>
          <Text className="text-lg mb-2">Pedido 1</Text>
          <Text className="text-lg mb-2">Pedido 2</Text>
          <Text className="text-lg mb-2">Pedido 3</Text>
        </View>
      </View>
    </View>
  );
};
