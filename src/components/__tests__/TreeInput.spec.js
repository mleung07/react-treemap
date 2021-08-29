import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import TreeInput from "../TreeInput";
import { updateTree, sampleTree } from "../../features/data";

// create a clean store for every test
let store;
beforeEach(() => {
  const initialState = { rows: 3, tree: [sampleTree] };
  const mockStore = configureStore([]);
  store = mockStore(initialState);

  const origDispatch = store.dispatch;
  store.dispatch = jest.fn(origDispatch);
});

it("should render TreeInput correctly", () => {
  const elem = render(
    <Provider store={store}>
      <TreeInput />
    </Provider>
  );
  expect(elem).toMatchSnapshot();
});

it("should update state on valid input", () => {
  const elem = render(
    <Provider store={store}>
      <TreeInput />
    </Provider>
  );
  const input = elem.getByLabelText("tree-input");
  fireEvent.change(input, {
    target: { value: '[{ "name": "A", "weight": 3, "value": -0.02 }]' },
  });
  expect(store.dispatch).toHaveBeenCalledWith(
    updateTree([{ name: "A", weight: 3, value: -0.02 }])
  );
});

it("should show warning message on invalid weight input", async () => {
  const elem = render(
    <Provider store={store}>
      <TreeInput />
    </Provider>
  );
  const input = elem.getByLabelText("tree-input");
  await fireEvent.change(input, {
    target: { value: '[{ "name": "A", "weight": "abc", "value": -0.02 }]' },
  });
  expect(screen.getByText("All weight has to be integer")).toBeInTheDocument();
});

it("should show warning message on invalid name input", async () => {
  const elem = render(
    <Provider store={store}>
      <TreeInput />
    </Provider>
  );
  const input = elem.getByLabelText("tree-input");
  await fireEvent.change(input, {
    target: { value: '[{ "name": 112, "weight": 2, "value": -0.02 }]' },
  });
  expect(
    screen.getByText("All name has to be string and length < 50")
  ).toBeInTheDocument();
});

it("should show warning message on invalid JSON input", async () => {
  const elem = render(
    <Provider store={store}>
      <TreeInput />
    </Provider>
  );
  const input = elem.getByLabelText("tree-input");
  await fireEvent.change(input, {
    target: { value: "Invalid_JSON" },
  });
  expect(screen.getByText("Invalid JSON")).toBeInTheDocument();
});

it("should show warning message on to long data input", async () => {
  const elem = render(
    <Provider store={store}>
      <TreeInput />
    </Provider>
  );
  const input = elem.getByLabelText("tree-input");

  const longInputArray = Array(60).fill(
    '{ "name": "A", "weight": 3, "value": -0.02 }'
  );
  await fireEvent.change(input, {
    target: { value: `[${longInputArray.join(",")}]` },
  });
  expect(screen.getByText("Maximum data length is 50")).toBeInTheDocument();
});
