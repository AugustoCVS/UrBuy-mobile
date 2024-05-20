import { Modal } from "src/components/Modais/Gerenic";

import { Text, View } from "react-native";
import { ModalUpdateInfoProps, formProps } from "./types";
import { Header } from "./components/Header";
import { useModalUpdateInfo } from "./hook";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formFields, updateUserInfoSchema } from "./utils";
import { Input } from "src/components/Input";
import { Button } from "src/components/Button";
import { ButtonSection } from "./components/ButtonSection";

export const ModalUpdateInfo: React.FC<ModalUpdateInfoProps> = ({
  modalRef,
  userInfo,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<formProps>({
    resolver: yupResolver(updateUserInfoSchema),
    values: {
      name: userInfo.name,
      email: userInfo.email,
      cnpj: userInfo.cnpj,
    },
  });

  const { states, actions } = useModalUpdateInfo({ modalRef, userInfo });

  const renderInputs = () => {
    return (
      <View className="w-full flex items-center justify-center pt-8">
        {formFields.map((field) => {
          return (
            <Controller
              key={field.id}
              control={control}
              name={field.name as keyof formProps}
              render={({ field: { onChange } }) => (
                <Input
                  placeholder={field.placeholder}
                  onChangeText={onChange}
                  errorMessage={errors[field.name]?.message}
                  value={control._formValues[field.name]}
                />
              )}
            />
          );
        })}
      </View>
    );
  };

  return (
    <Modal
      title="Teste"
      modalizeRef={modalRef}
      HeaderComponent={<Header onClose={actions.handleCloseModal} />}
    >
      <View className=" items-center py-4">
        {renderInputs()}
        <ButtonSection
          handleUpdateUserInfo={handleSubmit(actions.handleUpdateUserInfo)}
          loading={states.loading}
        />
      </View>
    </Modal>
  );
};
