import React from 'react';
import { View, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export const Menu: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <View className="bg-white p-8 rounded-lg shadow-md w-11/12">
        <View className="flex items-center mb-6">
          <View className='w-28 h-28 rounded-full bg-gray-600 flex items-center justify-center mb-8'>
          <FontAwesome name="camera" size={40} color="white" />
          </View>
          <View className="ml-4">
            <Text className="text-xl font-bold">Nome do Usuário</Text>
            <Text className="text-gray-600">Cargo / Descrição do Usuário</Text>
          </View>
        </View>

        <View className="border-t border-gray-300 pt-4">
          <MenuItem label="Perfil" iconName="user-circle" />
          <MenuItem label="Configurações" iconName="cog" />
        </View>
      </View>
    </View>
  );
};

const MenuItem = ({ label, iconName }: { label: string; iconName: string }) => {
  return (
    <View className="flex flex-row items-center mb-3">
      <Image
        source={{ uri: `ICON_URL_${iconName}` }}
        className="w-8 h-8 mr-3"
      />
      <Text className="text-lg">{label}</Text>
    </View>
  );
};
