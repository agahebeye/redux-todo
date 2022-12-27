import { combineReducers } from "redux";
import { todosReducer } from "./components/todos/todosReducer";
import { filtersReducer } from "./components/filters/filtersReducer";

export const reducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
});
