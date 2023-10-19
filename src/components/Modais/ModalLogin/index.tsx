import React from 'react';
import {AntDesign} from '@expo/vector-icons';

import * as T from './types';
import {Modal} from 'src/components/Modais/Gerenic';
import { Pressable, TextInput, View, Text } from 'react-native';
import { Button } from 'src/components/Button';

export const ModalLogin: React.FC<T.ModalLoginProps> = ({modalRef}) => {

  const onClose = () => {
    modalRef.current.close();
  }

  return (
    <Modal modalizeRef={modalRef} HeaderComponent={
      <View className="flex justify-center items-center mt-4">
            <Text className="text-blue-100 font-bold text-3xl">Login</Text>

            <Pressable onPress={onClose} className="absolute right-4 top-1">
                <AntDesign name="close" size={30} color="black"/>
            </Pressable>
        </View>
    }>
      <View className='flex flex-col gap-6 mt-4'>
        <TextInput placeholder='E-mail' className='w-80 h-16 flex justify-start p-4 bg-gray-100 rounded-xl border border-solid border-blue-100' />

        <TextInput placeholder='Senha' className='w-80 h-16 flex justify-start p-4 bg-gray-100 rounded-xl border border-solid border-blue-100' />
      </View>

      <Button className='bg-green-100 flex items-center justify-center py-4 rounded-xl mt-16 w-80'>
          <Text className='text-white font-bold text-xl'>Continuar</Text>
      </Button>
      <Pressable className='mt-4'>
        <Text className='text-gray-600'>Esqueci a Senha</Text>
      </Pressable>
    </Modal>
  );
};
