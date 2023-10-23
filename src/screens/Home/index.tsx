import React from 'react';
import {View, Text} from 'react-native';

import {Button} from 'src/components/Button';

import LogoIcon from 'src/assets/svg/logo.svg';
import LogoText from 'src/assets/svg/logoText.svg';
import { ModalLogin } from 'src/components/Modais/ModalLogin';

import { useHome } from './hooks';
import { ModalRegister } from 'src/components/Modais/ModalRegister';

const Home: React.FC = () => {
  const {refs, actions} = useHome();

  return (
   <>
    <View className="bg-blue-100 flex flex-col items-center justify-center w-full h-full">
      <View className="w-full flex items-center justify-center flex-row gap-4 mb-40">
        <LogoIcon />
        <LogoText />
      </View>

      <View className="flex flex-col gap-4">
        <Button className="bg-green-100 w-72 h-16 rounded-lg flex items-center justify-center text-center"  
        onPress={actions.handleOpenModalLogin}>
          <Text className="text-white text-lg">Login</Text>
        </Button>

        <Button className="bg-white w-72 h-16 rounded-lg flex items-center justify-center text-center" 
        onPress={actions.handleOpenModalRegister}
        >
          <Text className="text-green-100 text-lg">Cadastro</Text>
        </Button>
      </View>
    </View>

    <ModalLogin modalRef={refs.modalLoginRef} />
    <ModalRegister modalRef={refs.modalRegisterRef} />
   </>
  );
};

export default Home;