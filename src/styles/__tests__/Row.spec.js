import React from "react";
import { render } from "@testing-library/react";
import Row from "../Row";

test("renders Row component", () => {
  const elem = render(<Row />);

  expect(elem).toMatchSnapshot();
});
