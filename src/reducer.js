const initialState = {
  todos: [],
  filters: {
    colors: [],
    status: "active",
  },
};

export function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "todos/added":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Math.random().toString().substring(2, 9),
            text: payload,
            done: false,
          },
        ],
      };
    case "todos/toggled":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== payload) {
            return todo;
          }

          return { ...todo, done: !todo.done };
        }),
      };
    case "filters/statusChanged":
      return {
        ...state,
        filters: {
          ...state.filters,
          status: payload,
        },
      };
    default:
      return state;
  }
}
