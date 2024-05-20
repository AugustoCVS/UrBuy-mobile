import { RefObject } from "react";
import { Modalize } from "react-native-modalize";
import { AuthContextProps } from "src/context/AuthContext/auth.context";

import * as yup from "yup";
import { updateUserInfoSchema } from "./utils";

export type ModalUpdateInfoProps = {
  modalRef: RefObject<Modalize>;
  userInfo: AuthContextProps
};

export type formProps = yup.InferType<typeof updateUserInfoSchema>;
