import { useState } from "react";
import { useToast } from "native-base";

import * as T from "./types";
import * as U from "./utils";

export const useModalRegister = () => {
  const toast = useToast();

  const showErrorToast = (title: string): void => {
    toast.show({
      title: title,
      duration: 3000,
      bgColor: "red.500",
      placement: "top",
    });
  };

  const handleSignUp = async (FormData: T.useRegisterProps): Promise<void> => {
    try {
      await U.signUpSchema.validate(FormData, { abortEarly: false });
      // await api.post('/users', FormData);
      // modalRef.current?.close();
      // navigation.navigate('Login');
      console.log(FormData);
    } catch (error) {
      showErrorToast("Erro ao cadastrar usuário!");
    }
  };

  return {
    states: {},
    actions: {
      handleSignUp,
    },
  };
};
