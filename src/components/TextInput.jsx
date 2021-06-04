import React from 'react';
import PropTypes from 'prop-types';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';

const TextInput = ({
  leftIcon,
  placeholder,
  className,
  type,
  variant,
  isRequired,
  size,
  isReadOnly,
  value,
  onChange,
  required,
}) => {
  return (
    <InputGroup>
      {leftIcon && (
        <InputLeftElement pointerEvents="none" children={<PhoneIcon color="gray.300" />} />
      )}
      <Input
        placeholder={placeholder}
        className={className}
        type={type}
        variant={variant}
        size={size}
        isRequired={isRequired}
        isReadOnly={isReadOnly}
        value={value}
        onChange={onChange}
        required={required}
        // multiple={true}
        // noOfLines={5}
      />
    </InputGroup>
  );
};

TextInput.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
};
TextInput.defaultProps = {
  placeholder: 'Please enter text',
  className: '',
  type: 'text',
};

export default TextInput;
