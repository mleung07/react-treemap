import React, { useEffect } from "react";
import { useAppDispatch } from "./app/hooks";
import { initData } from "./features/data";
import Column from "./styles/Column";
import Row from "./styles/Row";
import Treemap from "./views/Treemap";
import UserInput from "./views/UserInput";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

`;

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initData());
  }, [dispatch]);

  return (
    <React.Fragment>
      <GlobalStyle />
      <Row>
        <Column size={3}>
          <UserInput />
        </Column>
        <Column size={7}>
          <Treemap />
        </Column>
      </Row>
    </React.Fragment>
  );
}

export default App;
