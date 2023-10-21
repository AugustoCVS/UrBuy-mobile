import { useState } from "react";
import { useToast} from 'native-base'

export const useModalLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    
    const toast = useToast();

    const validationEmptyValues = (): boolean => {
        let errorMessage = "Preencha todos os campos para continuar";
    
        if (!email && password) {
            errorMessage = "Preencha o campo de email para continuar";
        } else if (email && !password) {
            errorMessage = "Preencha o campo de senha para continuar";
        }
    
        if (!email || !password) {
            toast.show({
                title: errorMessage,
                duration: 3000,
                bgColor: "red.500",
                placement: "top",
            });
            return false;
        }
    
        return true;
    }
    
    //TODO: ALTERAR ESTA FUNÇÃO PARA REDIRECIONAR PARA A DASHBOARD
    const navigateToDashboard = (): void => {
        toast.show({
            title: "Login realizado com sucesso",
            duration: 3000,
            bgColor: "green.500",
            placement: "top",
        })
    }

    const isEmailValid = (email: string): boolean => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
      };
      
    const validateValue = (): boolean => {
        if (!isEmailValid(email)) {
            toast.show({
                title: "Email ou Senha inválidos",
                duration: 3000,
                bgColor: "red.500",
                placement: "top",
            });
            return false;
        }

        return true;
    }
      

    const resetValues = (): void => {
        setEmail('');
        setPassword('');
    }

    const showPassword = (): void => {
        setSecureTextEntry(!secureTextEntry);
    }

    const handleSubmit = (): void => {
        if(!validationEmptyValues()) return;
        if(!validateValue()) return;

        navigateToDashboard();
        resetValues();
    }

    return{
        states: {
            email,
            password,
            secureTextEntry
        },
        actions: {
            setEmail,
            setPassword,
            handleSubmit,
            showPassword,
        }
    }
}