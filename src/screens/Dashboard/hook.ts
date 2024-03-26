import { useContext, useState } from "react";
import {
  ProductContext,
  ProductProps,
} from "src/context/ProductContext/product.context";

import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "src/routes/stack.routes";
import { TabTypes } from "src/routes/tab.routes";

export const useDashboard = () => {
  const { actions } = useContext(ProductContext);
  const navigation = useNavigation<StackTypes>();
  const tabNavigation = useNavigation<TabTypes>()

  const handleNavigateToProductList = (productType: string): void => {
    actions.setProductType(productType);
    tabNavigation.navigate("Products")
  }

  const handleNavigateToProduct = ({
    product,
  }: {
    product: ProductProps;
  }): void => {
    actions.setProduct(product);
    navigation.navigate("SingleProduct");
  };

  return {
    actions: {
      handleNavigateToProduct,
      handleNavigateToProductList,
    },
  };
};
