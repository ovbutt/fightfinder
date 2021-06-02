import React from "react";
import PropTypes from "prop-types";
import { Button } from "@chakra-ui/react";

const CustomButton = ({
  colorScheme,
  onClick,
  size,
  label,
  variant,
  isLoading,
  spinnerPlacement,
  loadingText,
}) => {
  return (
    <Button
      colorScheme={`${colorScheme}`}
      onClick={onClick}
      size={size}
      variant={variant}
      isLoading={isLoading}
      spinnerPlacement={spinnerPlacement}
      loadingText={loadingText}
    >
      {label}
    </Button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  onclick: PropTypes.func,
  size: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.string,
  isLoading: PropTypes.bool,
  spinnerPlacement: PropTypes.string,
  loadingText: PropTypes.string,
};

Button.defaultProps = {
  colorScheme: "black",
  onClick: () => alert("Button Clicked"),
  size: "md",
  label: "Button",
  variant: "solid",
  isLoading: false,
  spinnerPlacement: "start",
  loadingText: "Loading",
};

export default CustomButton;
