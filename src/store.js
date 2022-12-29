import { createStore } from "redux";
import { applyMiddleware } from "redux";
// import { composeWithDevTools } from "@redux-devtools/extension";
// import thunkMiddldeware from "redux-thunk";
// import { reducer } from "./reducer";

// export const store = createStore(
//   reducer,
//   composeWithDevTools(applyMiddleware(thunkMiddldeware))
// );
import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./components/todos/todosReducer";
import { filtersReducer } from "./components/filters/filtersReducer";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer,
  },
});
