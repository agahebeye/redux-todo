import { combineReducers } from "redux";
import { filtersSlice } from "./feautures/filters/filterSlice";
import { todosSlice } from "./feautures/todos/todosSlice";

export const appReducer = combineReducers({
  todos: todosSlice,
  filters: filtersSlice,
});
