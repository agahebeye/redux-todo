import { createStore, combineReducers } from "redux";

import { todosReducer } from "./reducers/todosReducer";
import { filtersReducer } from "./reducers/filtersReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
});

export const store = createStore(rootReducer);
