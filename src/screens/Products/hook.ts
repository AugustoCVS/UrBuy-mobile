import { useState } from "react";

export const useProducts = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const onChangeText = (value: string) => {
    setSearchValue(value);
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
