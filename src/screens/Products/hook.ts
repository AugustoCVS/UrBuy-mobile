import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import {
  ProductContext,
  ProductProps,
} from "src/context/ProductContext/product.context";
import { StackTypes } from "src/routes/stack.routes";

export const useProducts = () => {
  const { actions } = useContext(ProductContext);
  const navigation = useNavigation<StackTypes>();

  const [searchValue, setSearchValue] = useState<string>("");

  const onChangeText = (value: string) => {
    setSearchValue(value);
  };

  const handleNavigateToProduct = ({
    product,
  }: {
    product: ProductProps;
  }): void => {
    actions.setProduct(product);
    navigation.navigate("SingleProduct");
  };

  return {
    states: {
      searchValue,
    },
    actions: {
      onChangeText,
      handleNavigateToProduct,
    },
  };
};
