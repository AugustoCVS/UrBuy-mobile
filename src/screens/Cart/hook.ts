import { useContext } from "react";
import { CartContext } from "src/context/CartContext/cart.context";
import { ProductProps } from "src/context/ProductContext/product.context";

export const useCart = () => {
  const { states: cartStates, actions: cartActions } = useContext(CartContext);

  const products = cartStates.products;
  const totalCart = cartStates.totalCart;

  const increaseProductAmount = (product: ProductProps): void => {
    cartActions.increaseProductAmount(product);
  };

  const decreaseProductAmount = (product: ProductProps): void => {
    cartActions.decreaseProductAmount(product);
  };

  const removeProductOnCart = (product: ProductProps): void => {
    cartActions.removeProductOnCart(product);
  };

  const clearCart = (): void => {
    cartActions.clearCart();
  };

  return {
    states: {
      products,
      totalCart,
    },
    actions: {
      increaseProductAmount,
      decreaseProductAmount,
      removeProductOnCart,
      clearCart,
    },
  };
};
