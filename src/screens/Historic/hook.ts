import { useState } from "react";

export const useHistoric = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const onChangeText = (text: string) => {
    setSearchValue(text);
  };

  return {
    states: {
      searchValue,
    },
    actions: {
      onChangeText,
    },
  };
};
