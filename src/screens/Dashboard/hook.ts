import { useCallback, useContext, useEffect, useState } from "react";
import {
  ProductContext,
  ProductProps,
} from "src/context/ProductContext/product.context";

import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "src/routes/stack.routes";
import { TabTypes } from "src/routes/tab.routes";
import { IProduct } from "src/services/interfaces/product";
import { ProductService } from "src/services/product";

export const useDashboard = () => {
  const { actions } = useContext(ProductContext);
  const navigation = useNavigation<StackTypes>();
  const tabNavigation = useNavigation<TabTypes>()

  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  const handleNavigateToProductList = (category: string): void => {
    actions.setCategory(category);
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

  const handleGetProducts = useCallback(async () => {
    setLoading(true);
    await ProductService.getProducts({
      size: 5,
    })
      .then((res) => {
        setProducts(res.content);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    handleGetProducts();
  }, []);

  return {
    states: {
      products,
      loading,
    },
    actions: {
      handleNavigateToProduct,
      handleNavigateToProductList,
    },
  };
};
