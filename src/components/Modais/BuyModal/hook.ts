import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { CartContext } from "src/context/CartContext/cart.context";
import { ProductContext } from "src/context/ProductContext/product.context";
import { StackTypes } from "src/routes/stack.routes";
import { BuyModalProps } from "./types";

export const useBuyModal = ({ modalRef }: BuyModalProps) => {
  const navigation = useNavigation<StackTypes>();

  const { actions } = useContext(CartContext);
  const { states } = useContext(ProductContext);

  const handleNavigateToBuyScreen = (): void => {
    navigation.navigate("Buy");
  };

  const handleAddToCart = (): void => {
    actions.addProductOnCart(states.product);
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
