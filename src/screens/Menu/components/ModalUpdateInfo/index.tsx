import { Modal } from "src/components/Modais/Gerenic";

import { Text } from "react-native";
import { ModalUpdateInfoProps } from "./types";

export const ModalUpdateInfo: React.FC<ModalUpdateInfoProps> = ({
  modalRef,
}) => {
  return (
    <Modal title="Teste" modalizeRef={modalRef}>
      <Text>HELLO</Text>
    </Modal>
  );
};
