import { useContext } from "react";
import { ProductContext } from "src/context/ProductContext/product.context";

export const useProductCard = () => {
  const { states } = useContext(ProductContext);

  const product = states.product;

  const productInfo = {
    category: product.category,
    price: product.price,
    amount: product.amount,
  }

  const productAdditionalInfo = {
    brand: product.brand,
    description: product.description,
  }

  return {
    states: {
      product,
      productInfo,
      productAdditionalInfo,
    },
  };
};
