import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@chakra-ui/react';

const IconBtn = ({ colorScheme, icon, onClick, className }) => {
  return (
    <IconButton
      colorScheme={colorScheme}
      // aria-label="Search database"
      icon={icon}
      size="sm"
      onClick={onClick}
      className={className}
    />
  );
};

IconBtn.propTypes = {
  colorScheme: PropTypes.string,
};

export default IconBtn;
