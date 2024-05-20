import { View } from "react-native";
import { Modal } from "../Gerenic";
import { ButtonSection } from "./components/ButtonSection";
import { Header } from "./components/Header";
import { useBuyModal } from "./hook";
import { BuyModalProps } from "./types";

export const BuyModal: React.FC<BuyModalProps> = ({ modalRef }) => {
  const { actions } = useBuyModal({ modalRef });

  return (
    <Modal
      modalizeRef={modalRef}
      HeaderComponent={<Header onClose={actions.handleCloseModal} />}
    >
      <View className="w-full flex items-center justify-center">
        <ButtonSection
          addToCart={actions.handleAddToCart}
          handleNavigateToBuyScreen={actions.handleNavigateToBuyScreen}
        />
      </View>
    </Modal>
  );
};
