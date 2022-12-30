export function todosReducer(state = { status: {}, items: {} }, action) {
  switch (action.type) {
    case "todos/added": {
      const items = { ...state.items };

      const id = Object.values(items).length;

      items[id] = {
        id,
        text: action.payload,
        done: false,
      };

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
