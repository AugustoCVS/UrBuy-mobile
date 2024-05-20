import { RefObject } from "react";
import { Modalize } from "react-native-modalize";
import { AuthContextProps } from "src/context/AuthContext/auth.context";

export type ModalUpdateInfoProps = {
  modalRef: RefObject<Modalize>;
  userInfo: AuthContextProps
};
