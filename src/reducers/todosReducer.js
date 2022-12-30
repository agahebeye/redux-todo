export function todosReducer(state = { status: {}, items: {} }, action) {
  switch (action.type) {
    case "todos/added": {
      const id = Math.random().toString().substring(2, 9);

      const items = { ...state.items };
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
