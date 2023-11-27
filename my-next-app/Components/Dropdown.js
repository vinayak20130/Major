// Dropdown.js
import React from 'react';

const Dropdown = ({ options, placeholder }) => {
  return (
    <select className="p-2 border rounded">
      <option value="">{placeholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default Dropdown;
