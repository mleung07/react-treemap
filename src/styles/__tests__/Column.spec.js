import React from "react";
import { render } from "@testing-library/react";
import Column from "../Column";

test("renders Column component", () => {
  const elem = render(<Column />);

  expect(elem).toMatchSnapshot();
});
