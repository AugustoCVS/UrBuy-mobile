import { RefObject } from "react";
import {Modalize} from 'react-native-modalize';

export type ModalRegisterProps = {
    modalRef: RefObject<Modalize>;
}

export type FormDataProps = {
    companyName: string;
    cnpj: string;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    cep: string;
    street: string;
    isBuyer: boolean;
    isSupplier: boolean;
}