import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Select from "../src/components/select";

storiesOf("Select", module).add("with text", () => {
  let props = {
    options: [{ value: "foo", text: "Foo" }]
  };
  return <Select onClick={action("clicked")} {...props} />;
});
