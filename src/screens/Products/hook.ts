import { useNavigation } from "@react-navigation/native";
import { useCallback, useContext, useEffect, useState } from "react";
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
  const [products, setProducts] = useState<IProduct[]>([])

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

  const handleGetProduct = useCallback(async() => {
    setLoading(true);
    await ProductService.getProducts({
      category: states.category,
      name: searchValue,
      page: 0,
      size: 20,
    })
    .then((res) => {
      setProducts(res.content)
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [searchValue, states.category])


  useEffect(() => {
    handleGetProduct()
  }, [])

  return {
    states: {
      searchValue,
      products,
    },
    actions: {
      onChangeText,
      handleNavigateToProduct,
    },
  };
};
