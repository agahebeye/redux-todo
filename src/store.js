import { createStore } from "redux";
import { initialState, reducer } from "./reducer";

export const store = createStore(reducer);
