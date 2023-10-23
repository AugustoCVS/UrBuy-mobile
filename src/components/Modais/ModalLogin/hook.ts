import { useState } from "react";
import { useToast} from 'native-base'
import * as yup from 'yup';

import * as T from "./types";
import * as U from "./utils";

export const useModalLogin = () => {
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    
    const toast = useToast();
    
    //TODO: ALTERAR ESTA FUNÇÃO PARA REDIRECIONAR PARA A DASHBOARD
    const navigateToDashboard = (): void => {
        toast.show({
            title: "Login realizado com sucesso",
            duration: 3000,
            bgColor: "green.500",
            placement: "top",
        })
    }

    const showErrorToast = (title: string): void => {
        toast.show({
          title: title,
          duration: 3000,
          bgColor: "red.500",
          placement: "top",
        });
      };
    

    const showPassword = (): void => {
        setSecureTextEntry(!secureTextEntry);
    }

    const handleSignUp = async (FormData: T.useLoginProps): Promise<void> => {
        try {
            await U.signInSchema.validate(FormData, { abortEarly: false });
            // await api.post('/users', FormData);
            // modalRef.current?.close();
            // navigation.navigate('Login');
            navigateToDashboard();
            console.log(FormData);
        } catch (error) {
            showErrorToast("E-mail ou senha inválidos!");
        }
    }

    return{
        states: {
            secureTextEntry
        },
        actions: {
            handleSignUp,
            showPassword,
        }
    }
}