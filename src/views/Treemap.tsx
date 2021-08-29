import styled from "styled-components";
import { useAppSelector } from "../app/hooks";
import {
  selectMaxWeightPerRow,
  selectRows,
  selectTree,
} from "../features/data";
import Item from "../components/TreeItem";

const Box = styled.div`
  width: 100%;
  border: 1px solid black;
  height: calc(80vh - 40px);
`;

const Treemap = () => {
  const tree = useAppSelector(selectTree);
  const rows = useAppSelector(selectRows);
  const weightPerRow = useAppSelector(selectMaxWeightPerRow);

  return (
    <div>
      <h3>Result</h3>
      <Box>
        {tree.map((item, index) => {
          return (
            <Item
              {...item}
              weightPerRow={weightPerRow}
              rows={rows}
              key={`${index}_${item.name}`}
            />
          );
        })}
      </Box>
    </div>
  );
};

export default Treemap;
