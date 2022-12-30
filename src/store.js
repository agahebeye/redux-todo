import { createStore } from "redux";

export const store = createStore(function (state = {}, action) {
  return {
    todos: todosReducer(state.todos, action),
    filters: todosReducer(state.filters, action),
  };
});

function filtersReducer(state = {}, action) {
  return state;
}

function todosReducer(state = { status: {}, items: {} }, action) {
  return state;
}
