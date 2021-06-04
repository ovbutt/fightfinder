import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from '@chakra-ui/react';

const CustomSpinner = ({ size }) => {
  return (
    <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size={size} />
  );
};

CustomSpinner.propTypes = { size: PropTypes.string };
CustomSpinner.defaultProps = { size: 'xl' };

export default CustomSpinner;
