import DropDownPicker from "react-native-dropdown-picker";
import { FormControl } from "native-base";
import * as T from "./types";
import { View } from "react-native";

export const DropDown: React.FC<T.DropDownProps> = ({
  items,
  open,
  setOpen,
  setValue,
  onChangeValue,
  value,
  placeholder,
  errorMessage,
  dropDownDirection,
}) => {
  const invalid = !!errorMessage;

  return (
    <FormControl isInvalid={invalid}>
      <View className="w-80">
        <DropDownPicker
          items={items}
          open={open}
          setOpen={setOpen}
          value={value}
          setValue={(newValue) => setValue(String(newValue))}
          onChangeValue={onChangeValue}
          placeholder={placeholder}
          dropDownDirection={dropDownDirection}
        />
      </View>
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
};
