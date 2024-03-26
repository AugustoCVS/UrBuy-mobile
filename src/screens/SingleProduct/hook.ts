import { useContext } from "react";
import { ProductContext } from "src/context/ProductContext/product.context";

export const useProductCard = () => {
  const { states } = useContext(ProductContext);

  const product = states.product;

  const productInfo = {
    productType: product.productType,
    price: product.price,
    quantity: product.quantity,
  }

  const productAdditionalInfo = {
    brand: product.additionalInfo?.brand,
    category: product.additionalInfo?.category,
    description: product.additionalInfo?.description,
  }

  return {
    states: {
      product,
      productInfo,
      productAdditionalInfo,
    },
  };
};
