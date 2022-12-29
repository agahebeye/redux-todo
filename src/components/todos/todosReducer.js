import { createSelector } from "reselect";
import { statusTypes } from "../filters/filtersReducer";

const initialState = {
  status: "idle",
  items: {},
};

export function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "todos/loading":
      return {
        ...state,
        status: "loading",
      };

    case "todos/loaded": {
      return {
        ...state,
        status: "idle",
        items: action.payload.reduce((acc, curr) => {
          acc[curr.id] = curr;
          return acc;
        }, {}),
      };
    }

    case "todos/added": {
      const todo = action.payload;

      return {
        ...state,
        status: "idle",
        items: {
          ...state.items,
          [todo.id]: todo,
        },
      };
    }

    case "todos/toggled": {
      const id = action.payload;
      const todo = state.items[id];

      return {
        ...state,
        items: {
          ...state.items,
          [id]: { ...todo, done: !todo.done },
        },
      };
    }

    case "todos/deleted": {
      const newItems = { ...state.items };
      delete newItems[action.payload];

      return {
        ...state,
        items: newItems,
      };
    }

    case "todos/markAllCompleted": {
      return {
        ...state,
        items: Object.values(state.items).reduce((acc, curr) => {
          acc[curr.id] = { ...curr, done: true };
          return acc;
        }, {}),
      };
    }

    case "todos/clearCompleted": {
      const items = Object.values(state.items).reduce((acc, curr) => {
        if (!curr.done) {
          acc[curr.id] = curr;
        }
        return acc;
      }, {});

      return {
        ...state,
        items,
      };
    }

    case "todos/colorSelected": {
      const { color, todoId } = action.payload;
      const todo = state.entities[todoId];
      return {
        ...state,
        entities: {
          ...state.entities,
          [todoId]: {
            ...todo,
            color,
          },
        },
      };
    }

    default:
      return state;
  }
}

export async function fetchTodos(dispatch) {
  dispatch({ type: "todos/loading" });

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

export const selectTodoItems = (state) => state.todos.items;

export const selectTodos = createSelector(selectTodoItems, (items) =>
  Object.values(items)
);

export const selectFilteredTodos = createSelector(
  selectTodos,
  (state) => state.filters,
  (todos, filters) => {
    const showAll = filters.status === statusTypes.All;
    if (showAll && filters.colors.length === 0) {
      return todos;
    }

    const completedStatus = filters.status === statusTypes.Completed;

    return todos.filter((todo) => {
      const statusMatched = showAll || todo.done === completedStatus;
      const colorMatched =
        filters.color.length === 0 || filters.colors.include(todo.color);

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
  return selectTodoItems(state)[id];
};
