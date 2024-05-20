import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useContext, useRef, useState } from "react";
import { Modalize } from "react-native-modalize";
import { AuthContext } from "src/context/AuthContext/auth.context";
import { StackTypes } from "src/routes/stack.routes";
import { useMessage } from "src/utils/message";

export const useMenu = () => {
  const { states } = useContext(AuthContext);

  const navigation = useNavigation<StackTypes>();
  const { showToast } = useMessage();

  const modalUpdateRef = useRef<Modalize>(null);

  const user = states.user;
  const userInfo = [
    { label: "CNPJ", value: states.user.cnpj },
    { label: "Email", value: states.user.email },
  ];

  const handleOpenUpdateModal = (): void => {
    modalUpdateRef.current?.open();
  };

  const handleChangePhoto = (): void => {
    showToast({
      title: "Funcionalidade em desenvolvimento",
      error: false,
    });
  };

  const handleLogout = async (): Promise<void> => {
    await AsyncStorage.removeItem("@token");
    navigation.navigate("Home");
  };

  return {
    refs: {
      modalUpdateRef,
    },
    states: {
      user,
      userInfo,
    },
    actions: {
      handleChangePhoto,
      handleOpenUpdateModal,
      handleLogout,
    },
  };
};
