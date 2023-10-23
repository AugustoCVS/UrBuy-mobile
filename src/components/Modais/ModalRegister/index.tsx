import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { View, Text, Pressable, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Modal } from "src/components/Modais/Gerenic";
import { Input } from "src/components/Input";
import { Button } from "src/components/Button";
import { Checkbox } from "src/components/Checkbox";
import { useModalRegister } from "./hook";

import * as T from "./types";
import * as U from "./utils";

export const ModalRegister: React.FC<T.ModalRegisterProps> = ({ modalRef }) => {
  const { states, actions } = useModalRegister();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<T.useRegisterProps>({
    resolver: yupResolver(U.signUpSchema),
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
        className="flex flex-col mt-4"
        style={{ maxHeight: 400 }}
        showsVerticalScrollIndicator={false}
      >
        <Controller
          control={control}
          name="companyName"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Nome da Empresa"
              onChangeText={onChange}
              errorMessage={errors.companyName?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="cnpj"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="CNPJ"
              onChangeText={onChange}
              errorMessage={errors.cnpj?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="E-mail"
              onChangeText={onChange}
              errorMessage={errors.email?.message}
            />
          )}
        />

        <View className="w-80 mb-4">
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange } }) => (
              <Input
                placeholder="Senha"
                onChangeText={onChange}
                errorMessage={errors.password?.message}
              />
            )}
          />
          <Text className="text-gray-600 text-xs px-4">
            A senha deve conter letras maíusculas e minúsculas, numeros e um
            caractere aespecial
          </Text>
        </View>

        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Confirmar Senha"
              onChangeText={onChange}
              errorMessage={errors.confirmPassword?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="cep"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Cep"
              onChangeText={onChange}
              errorMessage={errors.cep?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="street"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Rua"
              onChangeText={onChange}
              errorMessage={errors.street?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="complement"
          render={({ field: { onChange } }) => (
            <Input placeholder="Complemento" onChangeText={onChange} />
          )}
        />

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
