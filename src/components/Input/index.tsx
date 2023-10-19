import React from "react";

import * as T from "./types";
import { TextInput } from "react-native";

export const Input: React.FC<T.InputProps> = ({ placeholder, value, onChangeText, secureTextEntry }) => {
    return (
        <TextInput
        placeholder={placeholder}
        className="w-80 h-16 flex justify-start p-4 bg-gray-100 rounded-xl border border-solid border-blue-100 mt-4"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        />
    );
}