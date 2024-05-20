import { useContext, useState } from "react";
import { AuthContext } from "src/context/AuthContext/auth.context";
import { CartContext } from "src/context/CartContext/cart.context";
import { ProductProps } from "src/context/ProductContext/product.context";
import { PurchaseService } from "src/services/purchase";
import { dateFormatter } from "src/utils/formaters";
import { useMessage } from "src/utils/message";

export const useCart = () => {
  const { states: cartStates, actions: cartActions } = useContext(CartContext);
  const { states: userStates } = useContext(AuthContext);
  const { showToast } = useMessage();

  const [loading, setLoading] = useState<boolean>(false);

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

  const handleBuyAllTheProducts = async (): Promise<void> => {
    setLoading(true);
    products.forEach(async (product) => {
      PurchaseService.purchaseProduct(
        {
          amount: product.amount,
          category: product.category,
          date: dateFormatter.format(new Date()),
          name: product.name,
          price: product.price,
        },
        { productId: product.id, userId: userStates.user.id }
      )
        .then(() => {
          showToast({
            title: "Compra realizada com sucesso",
            error: false,
          });
          clearCart();
        })
        .catch((err) => {
          console.log(err, product.name);
          showToast({
            title: `Erro ao realizar a compra, do producto ${product.name}`,
            error: true,
          });
        })
        .finally(() => setLoading(false));
    });
  };

  const isEmpty = products.length === 0;

  return {
    states: {
      loading,
      products,
      totalCart,
      isEmpty,
    },
    actions: {
      increaseProductAmount,
      decreaseProductAmount,
      removeProductOnCart,
      clearCart,
      handleBuyAllTheProducts,
    },
  };
};
