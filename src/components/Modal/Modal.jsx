import { ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Modal as ChakraModal } from "@chakra-ui/react";
import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
    return (
        <ChakraModal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent maxW={"900px"} borderRadius={"50px"} padding={"100px"}>
                <ModalCloseButton top={"25px"} right={"25px"} size={"lg"} />
                <ModalBody display={"flex"} justifyContent={"center"} padding={"0px"} >
                    {children}
                </ModalBody>
            </ModalContent>
        </ChakraModal>
    )
}

export default Modal