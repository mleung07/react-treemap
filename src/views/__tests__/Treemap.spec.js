import React from "react";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import Treemap from "../Treemap";
import { sampleTree } from "../../features/data";

const mockStore = configureStore([]);

it("should render Treemap correctly", () => {
  const initialState = { rows: 3, tree: sampleTree };
  const store = mockStore(initialState);

  const elem = render(
    <Provider store={store}>
      <Treemap />
    </Provider>
  );
  expect(elem).toMatchSnapshot();
});
