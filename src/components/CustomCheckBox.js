import React from "react";
import PropTypes from "prop-types";
import { Checkbox } from "@chakra-ui/react";

const CustomCheckBox = ({ isChecked, isDisabled }) => {
  return (
    <Checkbox isChecked={isChecked} isDisabled={isDisabled}>
      Checkbox
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
