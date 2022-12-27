import { combineReducers } from "redux";
import { todosReducer } from "./features/todos/todosReducer";
import { filtersReducer } from "./features/filters/filtersReducer";

export const initialState = {
  todos: [],
  filters: {
    colors: [],
    status: "active",
  },
};

export const reducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
});
