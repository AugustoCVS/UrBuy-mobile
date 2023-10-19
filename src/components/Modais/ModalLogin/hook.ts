import { useState } from "react";
import { useToast} from 'native-base'

export const useModalLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    
    const toast = useToast();

    const validationEmptyValues = () => {
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
    const navigateToDashboard = () => {
        toast.show({
            title: "Login realizado com sucesso",
            duration: 3000,
            bgColor: "green.500",
            placement: "top",
        })
    }

    const isEmailValid = (email: string) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
      };

      const isPasswordValid = (password: string) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
      };
      
    const validateValue = () => {
        if (!isEmailValid(email)) {
            toast.show({
                title: "Email inválido",
                duration: 3000,
                bgColor: "red.500",
                placement: "top",
            });
            return false;
        }

        if (!isPasswordValid(password)) {
            toast.show({
                title: "Senha inválida",
                duration: 3000,
                bgColor: "red.500",
                placement: "top",
            });
            return false;
        }

        return true;
    }
      

    const resetValues = () => {
        setEmail('');
        setPassword('');
    }

    const showPassword = () => {
        setSecureTextEntry(!secureTextEntry);
    }

    const handleSubmit = () => {
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