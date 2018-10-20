import React from "react";
import PropTypes from "prop-types";

export function Select({ options }) {
  return (
    <select>
      {options.map(opt => (
        <option value={opt.value}>{opt.text}</option>
      ))}
    </select>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf({
    value: PropTypes.any,
    text: PropTypes.string
  })
};
