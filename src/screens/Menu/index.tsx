import React from "react";
import { View, Text, Image } from "react-native";
import { MenuItem } from "./components/MenuItem";
import { Header } from "./components/Header";
import { useMenu } from "./hook";
import { ModalUpdateInfo } from "./components/ModalUpdateInfo";
import { ButtonSection } from "./components/ButtonSection";

export const Menu: React.FC = () => {
  const { refs, states, actions } = useMenu();

  return (
    <>
      <View className="flex-1 h-full justify-between pt-24 items-center bg-gray-100">
        <View className="bg-white p-8 rounded-lg shadow-md w-11/12">
          <Header
            name={states.user.name}
            handleChangePhoto={actions.handleChangePhoto}
          />

          <View className="border-t border-gray-300 pt-4">
            {states.userInfo.map((info) => (
              <MenuItem
                key={info.label}
                label={info.label}
                value={info.value}
              />
            ))}
          </View>
        </View>
        <ButtonSection
          handleUpdateInfo={actions.handleOpenUpdateModal}
          handleLogout={actions.handleLogout}
        />
      </View>

      <ModalUpdateInfo modalRef={refs.modalUpdateRef} userInfo={states.user} />
    </>
  );
};
