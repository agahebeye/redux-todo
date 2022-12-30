import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./components/todos/todosReducer";
import { filtersReducer } from "./components/filters/filtersReducer";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer,
  },
});
