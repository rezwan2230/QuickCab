"use client";

import CustomModal from "@/app/(dashboardLayout)/components/modal/CustomModal";
import { Button, ModalHeader, useDisclosure } from "@heroui/react";

const AddCar = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  return (
    <div className="my-3">
      <CustomModal size="3xl " isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalHeader className="p-4 ">Add a Car</ModalHeader>
        Form Component
      </CustomModal>
      <Button size="md" variant="faded" onClick={onOpen}>
        Add Card
      </Button>
    </div>
  );
};

export default AddCar;
