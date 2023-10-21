import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";

import * as T from "./types";
import { Modal } from "src/components/Modais/Gerenic";
import { Pressable, View, Text } from "react-native";
import { Button } from "src/components/Button";
import { useModalLogin } from "./hook";
import { Input } from "src/components/Input";

export const ModalLogin: React.FC<T.ModalLoginProps> = ({ modalRef }) => {
  const { states, actions } = useModalLogin();

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
      <View className="flex flex-col mt-4 w-80">
        <Input
          placeholder="E-mail"
          value={states.email}
          onChangeText={(email) => {
            actions.setEmail(email);
          }}
        />

        <View className="flex flex-row items-center">
          <Input
            placeholder="Senha"
            value={states.password}
            onChangeText={(password) => {
              actions.setPassword(password);
            }}
            secureTextEntry={states.secureTextEntry}
          />

          <Pressable
            className="absolute right-4 top-3"
            onPress={actions.showPassword}
          >
            {states.secureTextEntry ? (
              <Entypo name="eye-with-line" size={24} color="#B3B3B3" />
            ) : (
              <AntDesign name="eyeo" size={24} color="#B3B3B3" />
            )}
          </Pressable>
        </View>
      </View>

      <Button
        className="bg-green-100 flex items-center justify-center py-4 rounded-xl mt-12 w-80"
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
