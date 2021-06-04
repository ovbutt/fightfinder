import React from 'react';
import PropTypes from 'prop-types';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from '@chakra-ui/react';
import { CustomButton } from '.';

const ConfirmDialogue = ({
  title,
  description,
  leftButtonText,
  leftButtonAction,
  rightButtonText,
  rightButtonAction,
  isOpen,
  onClose,
}) => {
  const cancelRef = React.useRef();

  return (
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader>{title}</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>{description}</AlertDialogBody>
        <AlertDialogFooter>
          <CustomButton
            colorScheme="blue"
            ref={cancelRef}
            onClick={onClose}
            label={leftButtonText}
          ></CustomButton>
          <CustomButton
            colorScheme="red"
            className="ml-3"
            label={rightButtonText}
            onClick={() => rightButtonAction()}
          ></CustomButton>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

ConfirmDialogue.propTypes = {};
ConfirmDialogue.defaultProps = {
  title: 'Confirm',
  description: 'Are you sure you want to perform this action?',
  leftButtonText: 'No',
  rightButtonText: 'Yes',
};

export default ConfirmDialogue;
