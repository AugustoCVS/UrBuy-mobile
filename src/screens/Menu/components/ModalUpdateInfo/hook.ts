import { useCallback, useContext, useState } from "react";
import { ModalUpdateInfoProps } from "./types";
import { AuthServices } from "src/services/auth";
import { UpdateUserInfoRequest } from "src/services/interfaces/auth";
import { useMessage } from "src/utils/message";
import { AuthContext } from "src/context/AuthContext/auth.context";
import { updateUserInfoSchema } from "./utils";

export const useModalUpdateInfo = ({
  modalRef,
  userInfo,
}: ModalUpdateInfoProps) => {
  const { showToast } = useMessage();
  const { actions } = useContext(AuthContext);

  const [loading, setLoading] = useState<boolean>(false);

  const handleCloseModal = (): void => {
    modalRef.current?.close();
  };

  const handleUpdateUserInfo = useCallback(
    async (formData: UpdateUserInfoRequest) => {
      setLoading(true);
      await updateUserInfoSchema.validate(formData, { abortEarly: false });
      await AuthServices.updateUserInfo({
        userId: userInfo.id,
        data: formData,
      })
        .then((res) => {
          actions.setUser(res);
          showToast({
            title: "Informações atualizadas com sucesso!",
            error: false,
          });
        })
        .catch(() => {
          showToast({
            title: "Erro ao atualizar as informações",
            error: true,
          });
        })
        .finally(() => setLoading(false));
    },
    []
  );

  return {
    states: {
      loading,
    },
    actions: {
      handleCloseModal,
      handleUpdateUserInfo,
    },
  };
};
