import { createSelector } from "reselect";

export function todosReducer(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case "todos/loaded":
      return action.payload;

    case "todos/added":
      return [...state, action.payload];

    case "todos/toggled":
      return state.map((todo) => {
        if (todo.id !== payload) {
          return todo;
        }

        return { ...todo, done: !todo.done };
      });

    case "todos/deleted": {
      return state.filter((todo) => todo.id !== action.payload);
    }

    case "todos/markAllCompleted": {
      return state.map((todo) => {
        return { ...todo, done: true };
      });
    }

    case "todos/clearCompleted": {
      return state.filter((todo) => !todo.done);
    }

    case "todos/colorSelected": {
      const { color, todoId } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }

        return {
          ...todo,
          color,
        };
      });
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

export const selectTodoIds = createSelector(
  (state) => state.todos,
  (todos) => todos.map((todo) => todo.id)
);
