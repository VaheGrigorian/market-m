import React from "react";

export default ({ options }) => (
  <select>
    {options.map(opt => (
      <option value={opt.value}>{opt.text}</option>
    ))}
  </select>
);
