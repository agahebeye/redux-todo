import { createStore, combineReducers } from "redux";

import { todosReducer } from "./reducers/todosReducer";
import { filtersReducer } from "./reducers/filtersReducer";

export const store = createStore(
  combineReducers({
    todos: todosReducer,
    filters: filtersReducer,
  })
);
