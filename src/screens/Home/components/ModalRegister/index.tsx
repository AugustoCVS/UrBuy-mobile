import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { View, Text, Pressable, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Modal } from "src/components/Modais/Gerenic";
import { Input } from "src/components/Input";
import { Button } from "src/components/Button";
import { useModalRegister } from "./hook";

import * as T from "./types";
import * as U from "./utils";
import { Checkbox } from "src/components/Checkbox";

export const ModalRegister: React.FC<T.ModalRegisterProps> = ({ modalRef }) => {
  const { states, actions } = useModalRegister();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<T.useRegisterProps>({
    resolver: yupResolver(U.signUpSchema),
    defaultValues: {
      companyName: "",
      email: "",
      password: "",
      selectedOption: "",
      cep: "",
      confirmPassword: "",
      complement: "",
      cnpj: "",
      street: "",
    }
  });

  const onClose = (): void => {
    modalRef.current.close();
  };

  return (
    <Modal
      modalizeRef={modalRef}
      HeaderComponent={
        <View className="flex justify-center items-center mt-4">
          <Text className="text-blue-100 font-bold text-3xl">Cadastro</Text>

          <Pressable onPress={onClose} className="absolute right-4 top-1">
            <AntDesign name="close" size={30} color="black" />
          </Pressable>
        </View>
      }
    >
      <ScrollView
        className="flex flex-col mt-4 w-80"
        style={{ maxHeight: 400 }}
        showsVerticalScrollIndicator={false}
      >
        {states.formFields.map((item) => (
          <Controller
            key={item.name}
            control={control}
            name={item.name as keyof T.useRegisterProps}
            render={({ field: { onChange } }) => (
              <>
                <Input
                  placeholder={item.placeholder}
                  onChangeText={onChange}
                  errorMessage={errors[item.name]?.message}
                />
                {item.name === "password" && (
                  <Text className="text-gray-600 text-xs px-4 mb-2">
                    A senha deve conter letras maiúsculas e minúsculas, números
                    e um caractere especial.
                  </Text>
                )}
              </>
            )}
          />
        ))}

        <View>
          <Controller
            control={control}
            name="selectedOption"
            render={({ field: { onChange } }) => (
              <Checkbox
                label="Comprador"
                checked={states.selectedOption === "isBuyer"}
                onChange={() => onChange("isBuyer")}
              />
            )}
          />

          <Controller
            control={control}
            name="selectedOption"
            render={({ field: { onChange } }) => (
              <Checkbox
                label="Fornecedor"
                checked={states.selectedOption === "isSupplier"}
                onChange={() => onChange("isSupplier")}
                errorMessage={errors.selectedOption?.message}
              />
            )}
          />
        </View>
      </ScrollView>
      <Button
        className="bg-green-100 flex items-center justify-center py-4 rounded-xl mt-16 w-80"
        onPress={handleSubmit(actions.handleSignUp)}
      >
        <Text className="text-white font-bold text-xl">Cadastrar</Text>
      </Button>
    </Modal>
  );
};
