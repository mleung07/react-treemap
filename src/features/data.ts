import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface Item {
  name: string;
  weight: number;
  value: number;
}

export interface TreeState {
  tree: Item[];
  rows: number;
}

const initialState: TreeState = {
  tree: [],
  rows: 1,
};

export const sampleTree: Item[] = [
  { name: "A", weight: 3, value: -0.02 },
  { name: "B", weight: 3, value: 0.05 },
  { name: "C", weight: 6, value: 0.015 },
  { name: "D", weight: 2, value: -0.01 },
  { name: "E", weight: 3, value: 0.01 },
];

export const defaultRows = 3;

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    initData: (state) => {
      state.tree = sampleTree;
      state.rows = defaultRows;
    },
    updateTree: (state, action: PayloadAction<Item[]>) => {
      state.tree = action.payload;
      state.rows = Math.max(1, Math.min(state.rows, action.payload.length));
    },
    updateRows: (state, action: PayloadAction<number>) => {
      state.rows = action.payload;
    },
  },
});

export const { initData, updateTree, updateRows } = dataSlice.actions;

// selectors
export const selectTree = (state: RootState) => state.tree;
export const selectRows = (state: RootState) => state.rows;
export const selectItemSize = (state: RootState) => state.tree.length;
export const selectMaxWeightPerRow = (state: RootState) => {
  // calculation: total weight / no. of rows
  // if any of the item has a larger width, update the max weight
  const maxWeight = Math.max(...state.tree.map((item) => item.weight));
  const totalWeight = state.tree.reduce((total, current) => {
    return total + current.weight;
  }, 0);
  return Math.max(maxWeight, Math.ceil(totalWeight / state.rows));
};

export default dataSlice.reducer;
