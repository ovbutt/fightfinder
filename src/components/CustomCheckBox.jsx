import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '@chakra-ui/react';

const CustomCheckBox = ({ isChecked, isDisabled, label, onChange }) => {
  return (
    <Checkbox isChecked={isChecked} isDisabled={isDisabled} onChange={onChange}>
      {label}
    </Checkbox>
  );
};

CustomCheckBox.propTypes = {
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

CustomCheckBox.defaultProps = {
  isChecked: false,
  isDisabled: false,
};

export default CustomCheckBox;
