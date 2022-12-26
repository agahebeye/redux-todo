const initialState = {
  todos: [{ id: 0, text: 'Learn React', completed: true }],
};

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

export function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/added':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoId(state.todos),
            text: action.payload,
            completed: false,
          },
        ],
      };

    case 'todos/toggled': {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    }

    default:
      return state;
  }
}
