import {useRef} from 'react';
import {Modalize} from 'react-native-modalize';

export const useHome = () => {
  const modalLoginRef = useRef<Modalize>(null);

  const handleOpenModalLogin = () => {
    modalLoginRef.current?.open();
  };

  return {
    refs: {
      modalLoginRef,
    },
    actions: {
      handleOpenModalLogin,
    },
  };
};
