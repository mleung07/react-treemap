import React from "react";
import { render, fireEvent } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import RowInput from "../RowInput";
import { updateRows, sampleTree } from "../../features/data";

const mockStore = configureStore([]);

it("should render RowInput correctly", () => {
  const initialState = { rows: 3, tree: sampleTree };
  const store = mockStore(initialState);

  const elem = render(
    <Provider store={store}>
      <RowInput />
    </Provider>
  );
  expect(elem).toMatchSnapshot();
});

it("should update state on input", () => {
  const initialState = { rows: 3, tree: sampleTree };
  const store = mockStore(initialState);

  const origDispatch = store.dispatch;
  store.dispatch = jest.fn(origDispatch);

  const elem = render(
    <Provider store={store}>
      <RowInput />
    </Provider>
  );
  const input = elem.getByLabelText("rows-input");
  fireEvent.change(input, { target: { value: 2 } });
  expect(store.dispatch).toHaveBeenCalledWith(updateRows(2));
});

it("should update not state on when rows > data.length", () => {
  const initialState = { rows: 3, tree: sampleTree };
  const store = mockStore(initialState);

  const origDispatch = store.dispatch;
  store.dispatch = jest.fn(origDispatch);

  const elem = render(
    <Provider store={store}>
      <RowInput />
    </Provider>
  );
  const input = elem.getByLabelText("rows-input");
  fireEvent.change(input, { target: { value: 999 } });
  expect(store.dispatch).not.toBeCalled();
});
