import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import dataReducer from "../features/data";

export const store = configureStore({
  reducer: dataReducer,
  devTools: process.env.NODE_ENV === "development",
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
