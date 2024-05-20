import { useCallback, useContext, useState } from "react";
import { AuthContext } from "src/context/AuthContext/auth.context";
import { ProductContext } from "src/context/ProductContext/product.context";
import { PurchaseService } from "src/services/purchase";
import { dateFormatter, priceFormatter } from "src/utils/formaters";
import { useMessage } from "src/utils/message";

export const useBuyProduct = () => {
  const { showToast } = useMessage();

  const { states } = useContext(ProductContext);
  const { states: userStates } = useContext(AuthContext);

  const [loading, setLoading] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(1);

  const product = states.product;

  const productPrice = Number(product.price) * amount;

  const productInfo = {
    category: product.category,
    price: priceFormatter.format(productPrice),
    amount: amount,
  };

  const handleBuyProduct = useCallback(async () => {
    setLoading(true);
    await PurchaseService.purchaseProduct(
      {
        amount: amount,
        category: product.category,
        date: dateFormatter.format(new Date()),
        name: product.name,
        price: product.price,
      },
      {
        userId: userStates.user.id,
        productId: product.id,
      }
    )
      .then(() => {
        showToast({ title: "Compra realizada com sucesso", error: false });
      })
      .catch(() => {
        showToast({ title: "Error ao realizar a compra", error: true });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const increaseAmount = (): void => {
    if(product.amount <= amount) {
      showToast({ title: "Quantidade máxima alcançada", error: true });
      return;
    }
    return setAmount(amount + 1);
  }

  const decreaseAmount = (): void => {
    if(amount === 1) return;
    return setAmount(amount - 1);
  }

  return {
    states: {
      product,
      productInfo,
      loading,
    },
    actions: {
      handleBuyProduct,
      increaseAmount,
      decreaseAmount,
    },
  };
};
