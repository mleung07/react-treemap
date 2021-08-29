import React from "react";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import UserInput from "../UserInput";
import { sampleTree } from "../../features/data";

const mockStore = configureStore([]);

it("should render UserInput correctly", () => {
  const initialState = { rows: 3, tree: sampleTree };
  const store = mockStore(initialState);

  const elem = render(
    <Provider store={store}>
      <UserInput />
    </Provider>
  );
  expect(elem).toMatchSnapshot();
});
