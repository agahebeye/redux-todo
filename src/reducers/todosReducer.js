import { createSelector } from "reselect";

const initialState = { status: {}, items: {} };

export function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "todos/added": {
      const id = Object.values(state.items).length;

      return {
        ...state,
        items: {
          ...state.items,
          [id]: {
            id,
            text: action.payload,
            done: false,
            color: "",
          },
        },
      };
    }

    case "todos/deleted": {
      const items = { ...state.items };
      delete items[action.payload];

      return {
        ...state,
        items,
      };
    }

    case "todos/toggled": {
      return {
        ...state,
        items: Object.values(state.items).reduce((acc, curr) => {
          if (curr.id === action.payload) {
            acc[curr.id] = { ...curr, done: !curr.done };
          } else {
            acc[curr.id] = curr;
          }

          return acc;
        }, {}),
      };
    }

    case "todos/colorPicked": {
      const { id, color } = action.payload;
      const todo = state.items[id];

      const items = {
        ...state.items,
        [id]: {
          ...todo,
          color,
        },
      };

      return {
        ...state,
        items,
      };
    }

    case "todos/completeAll": {
      return {
        ...state,
        items: Object.values(state.items).reduce((acc, curr) => {
          acc[curr.id] = { ...curr, done: true };
          return acc;
        }, {}),
      };
    }

    case "todos/clearAll": {
      return {
        ...state,
        items: Object.values(state.items).reduce((acc, curr) => {
          if (!curr.done) {
            acc[curr.id] = curr;
          }

          return acc;
        }, {}),
      };
    }

    default: {
      return state;
    }
  }
}

export const selectTodoItems = (state) => state.todos.items;

export const selectTodos = createSelector(selectTodoItems, (items) =>
  Object.values(items)
);

export const selectFilteredTodos = createSelector(
  selectTodos,
  (state) => state.filters,
  (items, filters) => {
    const { status, colors } = filters;

    const allSelected = status === "All";
    const completeSelected = status === "Complete";

    return items
      .filter((item) => allSelected || item.done === completeSelected)
      .filter((item) => colors.length === 0 || colors.includes(item.color));
  }
);
