import { createStore, compose } from "redux";
import { appReducer } from "./appReducer";
import { sayHiOnDispatch, includeMeaningOfLife } from "@/addons/enhancer";

export const store = createStore(
  appReducer,
  undefined,
  compose(sayHiOnDispatch, includeMeaningOfLife)
);
