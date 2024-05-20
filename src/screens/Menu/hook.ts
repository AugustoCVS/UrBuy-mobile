import { useContext, useRef, useState } from "react";
import { Modalize } from "react-native-modalize";
import { AuthContext } from "src/context/AuthContext/auth.context";
import { useMessage } from "src/utils/message";

export const useMenu = () => {
  const { states } = useContext(AuthContext);
  const { showToast } = useMessage();
  
  const modalUpdateRef = useRef<Modalize>(null);

  const userName = states.user.name;
  const userInfo = [
    { label: "CNPJ", value: states.user.cnpj },
    { label: "Email", value: states.user.email },
  ];

  const handleOpenUpdateModal = (): void => {
    modalUpdateRef.current?.open();
  }

  const handleChangePhoto = (): void => {
    showToast({
      title: "Funcionalidade em desenvolvimento",
      error: false,
    })
  };

  return {
    refs: {
      modalUpdateRef,
    },
    states: {
      userName,
      userInfo,
    },
    actions: {
      handleChangePhoto,
      handleOpenUpdateModal,
    }
  };
};
