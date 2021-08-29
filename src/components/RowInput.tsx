import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectRows, updateRows, selectItemSize } from "../features/data";

const NumberInput = styled.input`
  width: 100%;
`;

const RowInput = () => {
  const rows = useAppSelector(selectRows);
  const max = useAppSelector(selectItemSize);
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // validate
    const value = Number(event.target.value);
    if (value && value <= max) {
      dispatch(updateRows(value));
    }
  };

  return (
    <div>
      <NumberInput
        type="number"
        min={1}
        max={max}
        value={rows}
        aria-label="rows-input"
        onChange={handleChange}
      />
    </div>
  );
};

export default RowInput;
