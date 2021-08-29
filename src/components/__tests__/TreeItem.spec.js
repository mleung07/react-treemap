import React from "react";
import { render } from "@testing-library/react";
import TreeItem from "../TreeItem";

test("renders positive valued TreeItem component", () => {
  const testProps = {
    rows: 3,
    weightPerRow: 5,
    weight: 4,
    name: "+ve",
    value: 0.05,
  };
  const elem = render(<TreeItem {...testProps} />);

  expect(elem).toMatchSnapshot();
});

test("renders negative valued TreeItem component", () => {
  const testProps = {
    rows: 3,
    weightPerRow: 5,
    weight: 4,
    name: "-ve",
    value: -0.05,
  };
  const elem = render(<TreeItem {...testProps} />);

  expect(elem).toMatchSnapshot();
});

test("renders zero valued TreeItem component", () => {
  const testProps = {
    rows: 3,
    weightPerRow: 5,
    weight: 4,
    name: "zero",
    value: 0,
  };
  const elem = render(<TreeItem {...testProps} />);

  expect(elem).toMatchSnapshot();
});
