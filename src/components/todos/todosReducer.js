export function todosReducer(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case "todos/added":
      return [
        ...state,
        {
          id: Math.random().toString().substring(2, 9),
          text: payload,
          done: false,
        },
      ];

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
