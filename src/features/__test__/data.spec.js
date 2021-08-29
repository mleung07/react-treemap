import { configureStore } from "@reduxjs/toolkit";
import dataReducer, {
  initData,
  updateRows,
  updateTree,
  sampleTree,
  defaultRows,
  selectTree,
  selectRows,
  selectMaxWeightPerRow,
  selectItemSize,
} from "../data";

// create a clean store for every test
let store;
beforeEach(() => {
  store = configureStore({
    reducer: dataReducer,
  });
});

// testing data
const testRow = 3;
const testTree = [
  { name: "GOOG", weight: 3, value: -0.03 },
  { name: "MSFT", weight: 4, value: 0.07 },
  { name: "AAPL", weight: 5, value: 0.05 },
];

test("it should return the initial state", () => {
  expect(store.getState()).toEqual({ tree: [], rows: 1 });
});

test("it should init data correctly", () => {
  store.dispatch(initData());
  expect(store.getState().tree).toEqual(sampleTree);
  expect(store.getState().rows).toEqual(defaultRows);
});

test("it should update rows correctly", () => {
  store.dispatch(updateRows(testRow));
  expect(store.getState().rows).toEqual(testRow);
});

test("it should update tree correctly", () => {
  store.dispatch(updateTree(testTree));
  expect(store.getState().tree).toEqual(testTree);
});

test("it should select row correctly", () => {
  const mockState = {
    rows: testRow,
  };
  expect(selectRows(mockState)).toEqual(testRow);
});

test("it should select tree correctly", () => {
  const mockState = {
    tree: testTree,
  };
  expect(selectTree(mockState)).toEqual(testTree);
});

test("it should select max weight per row correctly", () => {
  const mockState = {
    tree: testTree,
    rows: testRow,
  };
  expect(selectMaxWeightPerRow(mockState)).toEqual(5);
});

test("it should select item size correctly", () => {
  const mockState = {
    tree: testTree,
  };
  expect(selectItemSize(mockState)).toEqual(3);
});
