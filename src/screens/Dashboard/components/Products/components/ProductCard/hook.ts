import { useContext } from "react"
import { ProductContext } from "src/context/ProductContext/product.context"

export const useProductCard = () => {
  const {states} = useContext(ProductContext)

  const product = states.product

  return {
    states: {
      product
    }
  }

}