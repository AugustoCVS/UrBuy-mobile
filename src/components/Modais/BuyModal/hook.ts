import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { CartContext } from "src/context/CartContext/cart.context";
import { ProductContext } from "src/context/ProductContext/product.context";
import { StackTypes } from "src/routes/stack.routes";
import { BuyModalProps } from "./types";
import { useMessage } from "src/utils/message";

export const useBuyModal = ({ modalRef }: BuyModalProps) => {
  const { showToast } = useMessage();
  const navigation = useNavigation<StackTypes>();

  const { actions } = useContext(CartContext);
  const { states } = useContext(ProductContext);

  const handleNavigateToBuyScreen = (): void => {
    navigation.navigate("Buy");
  };

  const handleAddToCart = (): void => {
    showToast({ title: "Produto adicionado ao carrinho", error: false });
    actions.addProductOnCart(states.product);
    modalRef.current?.close();
  };

  const handleCloseModal = (): void => {
    modalRef.current?.close();
  };

  return {
    actions: {
      handleNavigateToBuyScreen,
      handleAddToCart,
      handleCloseModal,
    },
  };
};
