import { useEffect, useState } from "react";
import { Item, selectTree, updateTree } from "../features/data";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import stringify from "json-stringify-pretty-compact";
import styled from "styled-components";

const JsonIuput = styled.textarea`
  width: 100%;
`;

const Warning = styled.div`
  color: red;
  min-height: 2em;
`;

let rawInput: string;

const TreeInput = () => {
  const stateTree = useAppSelector(selectTree);
  const dispatch = useAppDispatch();
  const [tmpInput, setTmpInput] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    rawInput = stringify(stateTree);
    setTmpInput(rawInput);
  }, [stateTree]);

  const validate = (input: string): boolean => {
    try {
      const parsedInput: Item[] = JSON.parse(input);
      // 1. length <= 50
      if (parsedInput.length > 50) {
        setMsg("Maximum data length is 50");
        return false;
      }
      // 2. name.length <= 50 & is string
      if (
        parsedInput.some((item) => {
          return typeof item.name !== "string" || item.name.length > 50;
        })
      ) {
        setMsg("All name has to be string and length < 50");
        return false;
      }
      // 3. weight is integer
      if (
        parsedInput.some((item) => {
          return (
            typeof item.weight !== "number" || !Number.isInteger(item.weight)
          );
        })
      ) {
        setMsg("All weight has to be integer");
        return false;
      }
      setMsg("");
      return true;
    } catch (e) {
      setMsg("Invalid JSON");
      return false;
    }
  };

  // TODO: add debounce
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const jsonString = event.target.value;
    setTmpInput(jsonString);
    if (validate(jsonString)) {
      const parsedInput: Item[] = JSON.parse(jsonString);
      dispatch(updateTree(parsedInput));
    }
  };

  return (
    <div>
      <JsonIuput
        cols={50}
        rows={20}
        value={tmpInput}
        aria-label="tree-input"
        onChange={handleChange}
      />
      <Warning>{msg}</Warning>
    </div>
  );
};

export default TreeInput;
