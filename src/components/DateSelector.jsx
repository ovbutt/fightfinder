import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const DateSelector = ({ selected, onChange, onSelect, placeholderText }) => {
  return (
    <div style={{ position: 'absolute', zIndex: 100 }}>
      <DatePicker
        selected={selected}
        onChange={onChange}
        onSelect={onSelect}
        className="calendar-styles mt-1"
        placeholderText={placeholderText}
        dateFormat="dd/MM/yyyy"
      />
    </div>
  );
};

DateSelector.propTypes = {
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
  placeholderText: PropTypes.string,
};

export default DateSelector;
