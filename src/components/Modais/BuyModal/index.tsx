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
      <ButtonSection
        addToCart={actions.handleAddToCart}
        handleNavigateToBuyScreen={actions.handleNavigateToBuyScreen}
      />
    </Modal>
  );
};
