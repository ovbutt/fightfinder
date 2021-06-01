import React from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup } from "@chakra-ui/react";

const CustomButton = ({
  color,
  onClick,
  size,
  label,
  variant,
  isLoading,
  spinnerPlacement,
  loadingText,
}) => {
  return (
    <ButtonGroup>
      <Button
        colorScheme={color}
        onClick={onClick}
        size={size}
        variant={variant}
        isLoading={isLoading}
        spinnerPlacement={spinnerPlacement}
        loadingText={loadingText}
      >
        {label}
      </Button>
    </ButtonGroup>
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
  color: "Teal",
  onClick: () => alert("Button Clicked"),
  size: "md",
  label: "Button",
  variant: "solid",
  isLoading: false,
  spinnerPlacement: "start",
  loadingText: "Loading",
};

export default CustomButton;
