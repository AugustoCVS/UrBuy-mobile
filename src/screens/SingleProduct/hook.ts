import { useContext, useRef } from "react";
import { Modalize } from "react-native-modalize";
import { ProductContext } from "src/context/ProductContext/product.context";
import { priceFormatter } from "src/utils/formaters";

export const useProductCard = () => {
  const { states } = useContext(ProductContext);

  const buyModalRef = useRef<Modalize>(null);

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

  const handleOpenBuyModal = () => {
    buyModalRef.current?.open();
  }

  return {
    refs: {
      buyModalRef,
    },
    states: {
      product,
      productInfo,
      productAdditionalInfo,
    },
    actions: {
      handleOpenBuyModal,
    },
  };
};
