import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { View, Text, Pressable, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Modal } from "src/components/Modais/Gerenic";
import { Input } from "src/components/Input";
import { Button } from "src/components/Button";
import { useModalRegister } from "./hook";

import * as T from "./types";
import * as U from "./utils";
import { Spinner } from "native-base";

export const ModalRegister: React.FC<T.ModalRegisterProps> = ({ modalRef }) => {
  const { states, actions } = useModalRegister({ modalRef });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<T.useRegisterProps>({
    resolver: yupResolver(U.signUpSchema),
  });

 

  return (
    <Modal
      modalizeRef={modalRef}
      HeaderComponent={
        <View className="flex justify-center items-center mt-4">
          <Text className="text-blue-100 font-bold text-3xl">Cadastro</Text>

          <Pressable onPress={actions.handleCloseModal} className="absolute right-4 top-1">
            <AntDesign name="close" size={30} color="black" />
          </Pressable>
        </View>
      }
    >
      <ScrollView
        className="flex flex-col mt-4 w-80"
        style={{ maxHeight: 500 }}
        showsVerticalScrollIndicator={false}
      >
        {U.formFields.map((item) => {
          if (item.name === "password") {
            return (
              <View>
                <Controller
                  control={control}
                  name={item.name}
                  render={({ field: { onChange } }) => (
                    <Input
                      placeholder={item.placeholder}
                      onChangeText={onChange}
                      errorMessage={errors.password?.message}
                      secureTextEntry={states.securePassword}
                    />
                  )}
                />

                <Pressable
                  className="absolute right-4 top-3"
                  onPress={actions.handleShowPassword}
                >
                  {states.securePassword ? (
                    <Entypo name="eye-with-line" size={24} color="#B3B3B3" />
                  ) : (
                    <AntDesign name="eyeo" size={24} color="#B3B3B3" />
                  )}
                </Pressable>
              </View>
            );
          }

          if (item.name === "confirm_password") {
            return (
              <View>
                <Controller
                  control={control}
                  name={item.name}
                  render={({ field: { onChange } }) => (
                    <Input
                      placeholder={item.placeholder}
                      onChangeText={onChange}
                      errorMessage={errors.confirm_password?.message}
                      secureTextEntry={states.secureConfirmPassword}
                    />
                  )}
                />

                <Pressable
                  className="absolute right-4 top-3"
                  onPress={actions.handleShowConfirmPassword}
                >
                  {states.secureConfirmPassword ? (
                    <Entypo name="eye-with-line" size={24} color="#B3B3B3" />
                  ) : (
                    <AntDesign name="eyeo" size={24} color="#B3B3B3" />
                  )}
                </Pressable>
              </View>
            );
          }

          return (
            <Controller
              key={item.name}
              control={control}
              name={item.name as keyof T.useRegisterProps}
              render={({ field: { onChange } }) => (
                <Input
                  placeholder={item.placeholder}
                  onChangeText={onChange}
                  errorMessage={errors[item.name]?.message}
                />
              )}
            />
          );
        })}
        <Text className="text-gray-600 text-xs px-4 mb-4 text-center">
          A senha deve conter letras maiúsculas e minúsculas, números e um
          caractere especial.
        </Text>
      </ScrollView>
      <Button
        className="bg-green-100 flex items-center justify-center py-4 rounded-xl mt-6 mb-6 w-80"
        onPress={handleSubmit(actions.handleSignUp)}
      >
        <Text className="text-white font-bold text-xl">
          {states.loading ? <Spinner color="white" size="sm" /> : "Cadastrar"}
        </Text>
      </Button>
    </Modal>
  );
};
