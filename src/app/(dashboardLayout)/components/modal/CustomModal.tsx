/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal, ModalContent } from "@heroui/react";

const CustomModal = ({ children, ...porps }: any) => {
  return (
    <Modal {...porps}>
      <ModalContent className="p-4">{children}</ModalContent>
    </Modal>
  );
};

export default CustomModal;
