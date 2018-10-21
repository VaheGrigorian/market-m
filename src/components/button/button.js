import React from "react";

import "./button.css";

export const Button = ({ children }) => (
  <button type="button" styleName="button">
    {children}
  </button>
);
