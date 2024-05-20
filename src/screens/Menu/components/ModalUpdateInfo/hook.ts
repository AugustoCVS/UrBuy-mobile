import { ModalUpdateInfoProps } from "./types";

export const useModalUpdateInfo = ({
  modalRef,
  userInfo,
}: ModalUpdateInfoProps) => {
  
  const handleCloseModal = (): void => {
    modalRef.current?.close();
  };

  return {
    states: {},
    actions: {
      handleCloseModal,
    },
  };
};
