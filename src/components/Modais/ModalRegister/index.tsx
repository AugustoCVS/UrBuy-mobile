import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { View, Text, Pressable, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";

import * as T from "./types";
import { Modal } from "src/components/Modais/Gerenic";
import { Input } from "src/components/Input";
import { Button } from "src/components/Button";
import { Checkbox } from "src/components/Checkbox";
import { useModalRegister } from "./hook";

export const ModalRegister: React.FC<T.ModalRegisterProps> = ({ modalRef }) => {
  const { actions } = useModalRegister();
  const { control, handleSubmit, formState: { errors } } = useForm<T.FormDataProps>();

  const onClose = (): void => {
    modalRef.current.close();
  };

  const handleSignUp = (data: T.FormDataProps): void => {
    console.log(data);
  }

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
          rules = {{
            required: 'O nome da empresa é obrigatório'
          }}
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
          render={({ field: { onChange, onBlur, value } }) => (
            <Input placeholder="CNPJ" onChangeText={onChange} />
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input placeholder="E-mail" onChangeText={onChange} />
          )}
        />

        <View className="w-80 mb-4">
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input placeholder="Senha" onChangeText={onChange} />
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
          render={({ field: { onChange, onBlur, value } }) => (
            <Input placeholder="Confirmar Senha" onChangeText={onChange} />
          )}
        />

        <Controller
          control={control}
          name="cep"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input placeholder="Cep" onChangeText={onChange} />
          )}
        />

        <Controller
          control={control}
          name="street"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input placeholder="Rua" onChangeText={onChange} />
          )}
        />

        <Controller
          control={control}
          name="isBuyer"
          render={({ field: { onChange, onBlur, value } }) => (
            <Checkbox label="Comprador" checked={false} onPress={() => {}} />
          )}
        />

        <Controller
          control={control}
          name="isSupplier"
          render={({ field: { onChange, onBlur, value } }) => (
            <Checkbox label="Fornecedor" checked={false} onPress={() => {}} />
          )}
        />
        
      </ScrollView>

      <Button className="bg-green-100 flex items-center justify-center py-4 rounded-xl mt-16 w-80"
      onPress={handleSubmit(handleSignUp)}
      >
        <Text className="text-white font-bold text-xl">Cadastrar</Text>
      </Button>
    </Modal>
  );
};
