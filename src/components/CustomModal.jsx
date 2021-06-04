import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { CustomButton } from '.';

const CustomModal = ({
  isOpen,
  onOpen,
  onClose,
  size,
  title,
  rightButtonText,
  rightButtonAction,
  leftButtonText,
  leftButtonAction,
  body,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{body}</ModalBody>

        <ModalFooter>
          <CustomButton colorScheme="red" onClick={leftButtonAction} label={leftButtonText} />
          <CustomButton
            // variant="ghost"
            colorScheme="green"
            label={rightButtonText}
            className="ml-2"
            style={{ marginLeft: 20 }}
            onClick={rightButtonAction}
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

CustomModal.propTypes = {
  isOpen: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  size: PropTypes.string,
  title: PropTypes.string,
  rightButtonText: PropTypes.string,
  rightButtonAction: PropTypes.func,
  leftButtonText: PropTypes.string,
  leftButtonAction: PropTypes.func,
};

export default CustomModal;
