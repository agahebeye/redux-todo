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

    default: {
      return state;
    }
  }
}
