import { useNavigation } from "@react-navigation/native";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Modalize } from "react-native-modalize";
import {
  ProductContext,
  ProductProps,
} from "src/context/ProductContext/product.context";
import { StackTypes } from "src/routes/stack.routes";
import { IProduct } from "src/services/interfaces/product";
import { ProductService } from "src/services/product";

export const useProducts = () => {
  const { states, actions } = useContext(ProductContext);
  const navigation = useNavigation<StackTypes>();

  const [loading, setLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [products, setProducts] = useState<IProduct[]>([]);

  const buyModalRef = useRef<Modalize>(null);

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

  const handleGetProducts = useCallback(async () => {
    setLoading(true);
    await ProductService.getProducts({
      category: states.category,
      name: searchValue,
      page: 0,
      size: 20,
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
  }, [states.category, searchValue]);

  useEffect(() => {
    handleGetProducts();
  }, [states.category, searchValue]);

  const handleRefresh = (): void => {
    handleGetProducts();
  }

  const handleOpenBuyModal = ({
    product,
  }: {
    product: ProductProps;
  }): void => {
    actions.setProduct(product);
    buyModalRef.current?.open();
  };

  return {
    refs: {
      buyModalRef,
    },
    states: {
      searchValue,
      products,
      loading,
    },
    actions: {
      onChangeText,
      handleNavigateToProduct,
      handleRefresh,
      handleOpenBuyModal,
    },
  };
};
