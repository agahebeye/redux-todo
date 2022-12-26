const todosState = [];

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

export function todosSlice(state = todosState, action) {
  switch (action.type) {
    case "todos/added":
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      ];

    case "todos/toggled":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    default:
      return state;
  }
}
