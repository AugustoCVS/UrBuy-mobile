import React from "react";
import { View, Text } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import * as T from "./types";

export const Checkbox: React.FC<T.CheckboxProps> = ({ label, checked, onPress }) => {
    return (
        <View className="flex flex-row mt-2">
            <BouncyCheckbox
                size={20}
                fillColor='#173042FC'
                innerIconStyle={{
                    borderRadius: 6, 
                  }}
                isChecked={checked}
                onPress={onPress}
            />
            <Text className="text-blue-100 text-xl">{label}</Text>
        </View>
    );
}