import { useContext } from "react"
import { ProductContext } from "src/context/ProductContext/product.context"

import * as T from "./types"
import { useNavigation } from "@react-navigation/native"
import { StackTypes } from "src/routes/stack.routes"

export const useDashboard = () => {
  const {actions} = useContext(ProductContext)
  const navigation = useNavigation<StackTypes>();
  
  const handleNavigateToProduct = ({product}: {product: T.ProductProps}): void => {
    actions.setProduct(product)
    navigation.navigate("Produtos")
  }

  return {
    actions: {
      handleNavigateToProduct
    }
  }

}