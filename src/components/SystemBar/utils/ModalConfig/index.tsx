import { FaCogs } from 'react-icons/fa';
import { ModalComponent } from '../../../Modal';

export const modalConfig = () => {
  const {
    Modal,
    toggleModal: toggleModalConfig,
    modalIsOpen: modalConfigIsOpen,
  } = ModalComponent();

  const ModalConfig = () => (
    <Modal title="Configuracoes" Icon={FaCogs}>
      <h1>fff</h1>
    </Modal>
  );

  return {
    ModalConfig,
    toggleModalConfig,
    modalConfigIsOpen,
  };
};
