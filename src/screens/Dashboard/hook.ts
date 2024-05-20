import { useCallback, useContext, useEffect, useRef, useState } from "react";
import {
  ProductContext,
  ProductProps,
} from "src/context/ProductContext/product.context";

import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "src/routes/stack.routes";
import { TabTypes } from "src/routes/tab.routes";
import { IProduct } from "src/services/interfaces/product";
import { ProductService } from "src/services/product";
import { AuthContext } from "src/context/AuthContext/auth.context";
import { Modalize } from "react-native-modalize";

export const useDashboard = () => {
  const { actions } = useContext(ProductContext);
  const { states } = useContext(AuthContext);

  const navigation = useNavigation<StackTypes>();
  const tabNavigation = useNavigation<TabTypes>();

  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  const buyModalRef = useRef<Modalize>(null);

  const handleNavigateToProductList = (category: string): void => {
    actions.setCategory(category);
    tabNavigation.navigate("Products");
  };

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

  const user = states.user;

  const handleOpenBuyModal = ({ product }: { product: ProductProps }) => {
    actions.setProduct(product);
    buyModalRef.current?.open();
  };

  const handleRefresh = (): void => {
    handleGetProducts();
  }

  return {
    refs: {
      buyModalRef,
    },
    states: {
      products,
      loading,
      user,
    },
    actions: {
      handleNavigateToProduct,
      handleNavigateToProductList,
      handleOpenBuyModal,
      handleRefresh,
    },
  };
};
