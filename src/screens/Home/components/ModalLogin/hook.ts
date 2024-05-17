import { useState } from "react";
import { useToast } from "native-base";
import { useNavigation } from "@react-navigation/native";

import * as U from "./utils";
import { StackTypes } from "src/routes/stack.routes";
import { FIREBASE_AUTH } from "auth/FirebaseConfig";
import { AuthServices } from "src/services/auth";
import { LoginRequest } from "src/services/interfaces/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useModalLogin = () => {
  const navigation = useNavigation<StackTypes>();
  const auth = FIREBASE_AUTH;
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [loading, setLoading] = useState(false);

  const toast = useToast();

  const showToast = ({
    title,
    error,
  }: {
    title: string;
    error: boolean;
  }): void => {
    toast.show({
      title: title,
      duration: 3000,
      bgColor: error ? "red.500" : "green.500",
      placement: "top",
    });
  };

  const navigateToDashboard = (): void => {
    showToast({ title: "Login efetuado com sucesso!", error: false });
    navigation.navigate("TabDashboard");
  };

  const showPassword = (): void => {
    setSecureTextEntry(!secureTextEntry);
  };

  const forgetPassword = (): void => {
    showToast({ title: "Funcionalidade em desenvolvimento!", error: true });
  };

  const handleSaveUserTokenOnStorage = async ({
    token,
  }: {
    token: string;
  }): Promise<void> => {
    await AsyncStorage.setItem("@token", token);
  };

  const handleSignUp = async (FormData: LoginRequest): Promise<void> => {
    setLoading(true);
    await U.signInSchema.validate(FormData, { abortEarly: false });
    AuthServices.login({
      data: FormData,
    })
      .then(async (res) => {
        await handleSaveUserTokenOnStorage(res);
        navigateToDashboard();
      })
      .catch(() => {
        showToast({ title: "Credências inválidas!", error: true });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    states: {
      secureTextEntry,
      loading,
    },
    actions: {
      handleSignUp,
      showPassword,
      forgetPassword,
    },
  };
};
