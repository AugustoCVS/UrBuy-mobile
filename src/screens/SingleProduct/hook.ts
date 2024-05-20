import { useContext } from "react";
import { CartContext } from "src/context/CartContext/cart.context";
import { ProductContext } from "src/context/ProductContext/product.context";
import { priceFormatter } from "src/utils/formaters";

export const useProductCard = () => {
  const { states } = useContext(ProductContext);
  const { actions } = useContext(CartContext);

  const product = states.product;

  const productInfo = {
    category: product.category,
    price: priceFormatter.format(product.price),
    amount: product.amount,
  };

  const productAdditionalInfo = {
    brand: product.brand,
    description: product.description,
  };

  const handleAddProductOnCart = () => {
    actions.addProductOnCart(product);
  };

  return {
    states: {
      product,
      productInfo,
      productAdditionalInfo,
    },
    actions: {
      handleAddProductOnCart,
    },
  };
};
