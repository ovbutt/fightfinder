import React from 'react';
import PropTypes from 'prop-types';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';

const TextInput = ({ leftIcon, placeholder, className, type }) => {
  return (
    <InputGroup>
      {leftIcon && (
        <InputLeftElement pointerEvents="none" children={<PhoneIcon color="gray.300" />} />
      )}
      <Input placeholder={placeholder} className={className} type={type} />
    </InputGroup>
  );
};

TextInput.propTypes = {};

export default TextInput;
