import React from "react";
import { AntDesign } from "@expo/vector-icons";

import * as T from "./types";
import { Modal } from "src/components/Modais/Gerenic";
import { Pressable, TextInput, View, Text } from "react-native";
import { Button } from "src/components/Button";
import { useModalLogin } from "./hook";

export const ModalLogin: React.FC<T.ModalLoginProps> = ({ modalRef }) => {
  const {states, actions} = useModalLogin()

  const onClose = () => {
    modalRef.current.close();
  };

  return (
    <Modal
      modalizeRef={modalRef}
      HeaderComponent={
        <View className="flex justify-center items-center mt-4">
          <Text className="text-blue-100 font-bold text-3xl">Login</Text>

          <Pressable onPress={onClose} className="absolute right-4 top-1">
            <AntDesign name="close" size={30} color="black" />
          </Pressable>
        </View>
      }
    >
      <View className="flex flex-col gap-6 mt-4">
        <TextInput
          placeholder="E-mail"
          className="w-80 h-16 flex justify-start p-4 bg-gray-100 rounded-xl border border-solid border-blue-100"
          value={states.email}
          onChangeText={(email) => {actions.setEmail(email)}}
        />

      <View className="flex flex-row items-center">
        <View className="w-80">
          <TextInput
            placeholder="Senha"
            className="w-80 h-16 flex justify-start p-4 bg-gray-100 rounded-xl border border-solid border-blue-100"
            value={states.password}
            onChangeText={(password) => {actions.setPassword(password)}}
            secureTextEntry={states.secureTextEntry}
          />
          <Text className="text-gray-600 text-xs">A senha deve conter uma letras maíusculas e minúsculas, numeros e um caractere aespecial</Text>
        </View>

        <Pressable className="absolute right-4 top-5"
        onPress={actions.showPassword}>
          <AntDesign name="eyeo" size={24} color="#B3B3B3" />
        </Pressable>
      </View>
      </View>

      <Button className="bg-green-100 flex items-center justify-center py-4 rounded-xl mt-16 w-80"
      onPress={actions.handleSubmit}
      >
        <Text className="text-white font-bold text-xl">Continuar</Text>
      </Button>
      <Pressable className="mt-4">
        <Text className="text-gray-600">Esqueci a Senha</Text>
      </Pressable>
    </Modal>
  );
};
