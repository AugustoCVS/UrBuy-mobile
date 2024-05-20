import { useContext } from "react";
import { ProductContext } from "src/context/ProductContext/product.context";
import { priceFormatter } from "src/utils/formaters";

export const useBuyProduct = () => {
  const { states } = useContext(ProductContext);

  const product = states.product;

  const productInfo = {
    category: product.category,
    price: priceFormatter.format(product.price),
    amount: product.amount,
  };

  return {
    states: {
      product,
      productInfo,
    },
    actions: {},
  };
};
