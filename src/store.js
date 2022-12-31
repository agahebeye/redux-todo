import { createStore, combineReducers, applyMiddleware } from "redux";

import { todosReducer } from "./reducers/todosReducer";
import { filtersReducer } from "./reducers/filtersReducer";
import { thunkMiddleware } from "./addons/middleware";

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
