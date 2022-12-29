import { createSelector } from "reselect";
import { statusTypes } from "../filters/filtersReducer";

const initialState = {
  status: "loading",
  items: [],
};

export function todosReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "todos/loaded":
      return {
        status: state.status,
        items: action.payload,
      };

    case "todos/added":
      return { status: state.status, items: [...state.items, action.payload] };

    case "todos/toggled":
      return {
        status: state.status,
        items: state.items.map((todo) => {
          if (todo.id !== payload) {
            return todo;
          }

          return { ...todo, done: !todo.done };
        }),
      };

    case "todos/deleted": {
      return {
        status: state.status,
        items: state.items.filter((todo) => todo.id !== action.payload),
      };
    }

    case "todos/markAllCompleted": {
      return {
        status: state.status,
        items: state.items.map((todo) => {
          return { ...todo, done: true };
        }),
      };
    }

    case "todos/clearCompleted": {
      return {
        status: state.status,
        items: state.items.filter((todo) => !todo.done),
      };
    }

    case "todos/colorSelected": {
      const { color, todoId } = action.payload;
      return {
        status: state.status,
        items: state.items.map((todo) => {
          if (todo.id !== todoId) {
            return todo;
          }

          return {
            ...todo,
            color,
          };
        }),
      };
    }

    default:
      return state;
  }
}

export async function fetchTodos(dispatch) {
  const response = await fetch("/api/todos");
  const data = await response.json();
  dispatch({ type: "todos/loaded", payload: data.todos });
}

export function saveTodo(text) {
  return async (dispatch) => {
    const todo = { text };
    const response = await fetch("/api/todos", {
      method: "post",
      body: JSON.stringify({ todo }),
    });

    const data = await response.json();
    // console.log(data);
    dispatch({ type: "todos/added", payload: data.todo });
  };
}

export const selectTodos = (state) => state.todos.items;

export const selectFilteredTodos = createSelector(
  selectTodos,
  (state) => state.filters,
  (todos, filters) => {
    const showAll = filters.status === statusTypes.All;
    if (showAll && filters.color.length === 0) {
      return todos;
    }

    const completedStatus = filters.status === statusTypes.Completed;

    return todos.filter((todo) => {
      const statusMatched = showAll || todo.done === completedStatus;
      const colorMatched =
        filters.color.length === 0 || filters.color.include(todo.color);

      return statusMatched && colorMatched;
    });
  }
);

export const selectTodoIds = createSelector(selectTodos, (todos) =>
  todos.map((todo) => todo.id)
);

export const selectFilteredTodoIds = createSelector(
  selectFilteredTodos,
  (todos) => todos.map((todo) => todo.id)
);

export const selectTodoById = (state, id) => {
  return selectTodos(state).find((todo) => todo.id === id);
};
