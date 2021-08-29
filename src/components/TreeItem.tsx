import styled from "styled-components";
import { Item } from "../features/data";

interface Props extends Item {
  weightPerRow: number;
  rows: number;
}

const Box = styled.div<Props>`
  display: inline-block;
  border: 1px solid black;
  /* calculate height by dividing no. of rows in % */
  height: ${(props) => `calc(100% / ${props.rows})`};
  /* calculate width by dividing weight by weight per row in % */
  width: ${(props) => `calc(100% / ${props.weightPerRow} * ${props.weight})`};
  background-color: ${(props) => {
    switch (Math.sign(props.value)) {
      case 1:
        return "green";
      case -1:
        return "red";
      default:
        return "grey";
    }
  }};
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TreeItem = (props: Props) => {
  return (
    <Box {...props}>
      <Wrapper>
        <div>{props.name}</div>
        <div>{props.value * 100}%</div>
      </Wrapper>
    </Box>
  );
};

export default TreeItem;
