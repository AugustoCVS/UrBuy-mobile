import { useState } from "react";
import { useToast } from "native-base";

import * as T from "./types";
import * as U from "./utils";
import { AuthServices } from "src/services/auth";
import { RegisterRequest } from "src/services/interfaces/auth";

export const useModalRegister = ({modalRef}: T.ModalRegisterProps) => {
  const toast = useToast();
  const [securePassword, setSecurePassword] = useState(true);
  const [secureConfirmPassword, setSecureConfirmPassword] = useState(true);
  const [loading, setLoading] = useState<boolean>(false);

  const showToast = ({title, error}: {title: string, error: boolean }): void => {
    toast.show({
      title: title,
      duration: 3000,
      bgColor: error ? "red.500" : "green.500",
      placement: "top",
    });
  };

  const handleShowPassword = (): void => {
    setSecurePassword(!securePassword);
  };

  const handleShowConfirmPassword = (): void => {
    setSecureConfirmPassword(!secureConfirmPassword);
  }

  const handleSignUp = async (FormData: RegisterRequest): Promise<void> => {
    setLoading(true);
  await U.signUpSchema.validate(FormData, { abortEarly: false });
   AuthServices.register({data: FormData})
   .then(() => {
      showToast({title: "Usuário cadastrado com sucesso!", error: false})
      modalRef.current?.close();
   })
   .catch(() => {
      showToast({title: "Erro ao cadastrar o usuário", error: true});
   })
   .finally(() => setLoading(false));
  };

  const handleCloseModal = (): void => {
    modalRef.current.close();
  };

  return {
    states: {
      loading,
      securePassword,
      secureConfirmPassword,
    },
    actions: {
      handleSignUp,
      handleCloseModal,
      handleShowPassword,
      handleShowConfirmPassword,
    },
  };
};
