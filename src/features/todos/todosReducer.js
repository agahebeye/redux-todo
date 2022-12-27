const nextTodoId = (todos) =>
  todos.reduce((todo, curr) => Math.max(todo.id, curr), -1) + 1;

export function todosReducer(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case "todos/added":
      return [
        ...state,
        {
          id: nextTodoId(state) /* Math.random().toString().substring(2, 9) */,
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

    default:
      return state;
  }
}
