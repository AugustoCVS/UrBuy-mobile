import { useContext } from "react";
import { AuthContext } from "src/context/AuthContext/auth.context";
import { useMessage } from "src/utils/message";

export const useMenu = () => {
  const { states } = useContext(AuthContext);
  const { showToast } = useMessage();

  const userName = states.user.name;

  const userInfo = [
    { label: "CNPJ", value: states.user.cnpj },
    { label: "Email", value: states.user.email },
  ];

  const handleChangePhoto = (): void => {
    showToast({
      title: "Funcionalidade em desenvolvimento",
      error: false,
    })
  };

  return {
    states: {
      userName,
      userInfo,
    },
    actions: {
      handleChangePhoto,
    }
  };
};
