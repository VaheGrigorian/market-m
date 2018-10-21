import React from "react";
import { render } from "react-testing-library";
import { Button } from "../button";

describe("Button", () => {
  test("renders", () => {
    let container = render(<Button />);
    expect(container).toMatchSnapshot();
  });
});
