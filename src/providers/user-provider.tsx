import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import { ReactNode, useCallback, useContext, useEffect } from "react";
import { AuthContext } from "src/context/AuthContext/auth.context";
import { AuthServices } from "src/services/auth";
import { useMessage } from "src/utils/message";

interface ITokenPayload {
  sub: string;
  iss: string;
  name: string;
  id: number;
  exp: number;
  email: string;
}

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { actions } = useContext(AuthContext);
  const { showToast } = useMessage();

  const handleGetUserInfo = useCallback(async () => {
    const token = await AsyncStorage.getItem("@token");
    const userId = jwtDecode<ITokenPayload>(token).id;

    await AuthServices.getUserInfo({ userId: userId })
      .then((res) => {
        actions.setUser(res);
      })
      .catch((err) => {
        console.log(err);
        showToast({
          title: "Erro ao buscar informações do usuário",
          error: true,
        });
      });
  }, []);

  useEffect(() => {
    handleGetUserInfo();
  }, []);

  return <>{children}</>;
};
