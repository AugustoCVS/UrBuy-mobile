import { useContext } from "react"
import { ProductContext, ProductProps } from "src/context/ProductContext/product.context"

import { useNavigation } from "@react-navigation/native"
import { StackTypes } from "src/routes/stack.routes"

export const useDashboard = () => {
  const {actions} = useContext(ProductContext)
  const navigation = useNavigation<StackTypes>();
  
  const handleNavigateToProduct = ({product}: {product: ProductProps}): void => {
    actions.setProduct(product)
    navigation.navigate("SingleProduct")
  }

  return {
    actions: {
      handleNavigateToProduct
    }
  }

}