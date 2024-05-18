import { useContext } from "react";
import { AuthContext } from "src/context/AuthContext/auth.context";

export const useMenu = () => {
  const { states } = useContext(AuthContext);

  const userName = states.user.name;

  const userInfo = [
    { label: "CNPJ", value: states.user.cnpj },
    { label: "Email", value: states.user.email },
  ]

  return {
    states: {
      userName,
      userInfo,
    }
  }
};
